import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AlbumList from '@/components/AlbumList'
import { fetchAlbums } from '@/services/api';
import { useEffect, useState } from 'react';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums().then(setAlbums);
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
        <TabsContent value='songs'>Songs Data.</TabsContent>
        <TabsContent value='artists'>Artists Data.</TabsContent>
      </Tabs>
    </div>
  )
}

export default App
