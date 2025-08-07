import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AlbumList from '@/components/AlbumList'
import SongList from '@/components/SongList'
import { fetchAlbums, fetchSongs } from '@/services/api'
import { useEffect, useState } from 'react';
import type { Album, Song } from '@/types/models';

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetchAlbums().then(setAlbums);
    fetchSongs().then(setSongs);
  }, []);

  return (
    <div className='h-fit w-full px-12 py-12 flex flex-col items-center justify-start'>
      <Tabs defaultValue='albums' className='w-fit text-center flex flex-col items-center justify-center'>
        <TabsList>
          <TabsTrigger value='albums'>Albums</TabsTrigger>
          <TabsTrigger value='songs'>Songs</TabsTrigger>
          <TabsTrigger value='artists'>Artists</TabsTrigger>
        </TabsList>
        <div className='h-8' ></div>
        <TabsContent value='albums'><AlbumList albums={albums} /></TabsContent>
        <TabsContent value='songs'><SongList songs={songs} /></TabsContent>
        <TabsContent value='artists'>Artists Data.</TabsContent>
      </Tabs>
    </div>
  )
}

export default App
