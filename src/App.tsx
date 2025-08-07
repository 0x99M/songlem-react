import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AlbumList from '@/components/AlbumList';
import SongList from '@/components/SongList';
import ArtistList from '@/components/ArtistList';
import { fetchAlbums, fetchArtists, fetchSongs } from '@/services/api';
import { useEffect, useState } from 'react';
import type { Album, Artist, Song } from '@/types/models';

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loadingStates, setLoadingStates] = useState({
    albums: false,
    songs: false,
    artists: false
  });
  const [loadedTabs, setLoadedTabs] = useState({
    albums: false,
    songs: false,
    artists: false
  });

  const loadTabData = async (tabName: 'albums' | 'songs' | 'artists') => {
    if (loadedTabs[tabName] || loadingStates[tabName]) return;

    setLoadingStates(prev => ({ ...prev, [tabName]: true }));

    try {
      switch (tabName) {
        case 'albums':
          const albumsData = await fetchAlbums();
          setAlbums(albumsData);
          break;
        case 'songs':
          const songsData = await fetchSongs();
          setSongs(songsData);
          break;
        case 'artists':
          const artistsData = await fetchArtists();
          setArtists(artistsData);
          break;
      }
      setLoadedTabs(prev => ({ ...prev, [tabName]: true }));
    } catch (error) {
      console.error(`Error loading ${tabName}:`, error);
    } finally {
      setLoadingStates(prev => ({ ...prev, [tabName]: false }));
    }
  };

  const handleTabChange = (value: string) => {
    const tabName = value as 'albums' | 'songs' | 'artists';
    loadTabData(tabName);
  };

  // Load albums by default since it's the default tab
  useEffect(() => {
    loadTabData('albums');
  }, []);

  const LoadingIndicator = ({ type }: { type: string }) => (
    <div className='flex flex-col items-center justify-center py-12'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
        <p className='text-sm text-gray-600'>Loading {type}...</p>
      </div>
    </div>
  );

  return (
    <div className='h-fit w-full px-12 py-12 flex flex-col items-center justify-start gap-8'>
      <div className='px-4 py-2 rounded-xl bg-neutral-800 text-neutral-100' >
        <h3>The backend service might be sleeping. Wait 60 seconds it will wake up!</h3>
      </div>
      <Tabs defaultValue='albums' className='w-fit text-center flex flex-col items-center justify-center' onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value='albums'>Albums</TabsTrigger>
          <TabsTrigger value='songs'>Songs</TabsTrigger>
          <TabsTrigger value='artists'>Artists</TabsTrigger>
        </TabsList>
        <div className='h-8' ></div>
        <TabsContent value='albums'>
          {loadingStates.albums ? (
            <LoadingIndicator type="albums" />
          ) : (
            <AlbumList albums={albums} />
          )}
        </TabsContent>
        <TabsContent value='songs'>
          {loadingStates.songs ? (
            <LoadingIndicator type="songs" />
          ) : (
            <SongList songs={songs} />
          )}
        </TabsContent>
        <TabsContent value='artists'>
          {loadingStates.artists ? (
            <LoadingIndicator type="artists" />
          ) : (
            <ArtistList artists={artists} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default App;
