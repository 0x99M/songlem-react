import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AlbumList from '@/components/AlbumList';
import SongList from '@/components/SongList';
import ArtistList from '@/components/ArtistList';

function App() {
  return (
    <div className='h-fit w-full px-12 py-12 flex flex-col items-center justify-start gap-8'>
      <div className='px-4 py-2 rounded-xl bg-neutral-800 text-neutral-100'>
        <h3>The backend service might be sleeping. Wait 60 seconds it will wake up!</h3>
      </div>
      <Tabs defaultValue='albums' className='w-fit text-center flex flex-col items-center justify-center'>
        <TabsList>
          <TabsTrigger value='albums'>Albums</TabsTrigger>
          <TabsTrigger value='songs'>Songs</TabsTrigger>
          <TabsTrigger value='artists'>Artists</TabsTrigger>
        </TabsList>
        <div className='h-8'></div>
        <TabsContent value='albums'>
          <AlbumList />
        </TabsContent>
        <TabsContent value='songs'>
          <SongList />
        </TabsContent>
        <TabsContent value='artists'>
          <ArtistList />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default App;
