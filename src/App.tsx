import './App.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function App() {
  return (
    <div className='h-screen w-full py-12 flex flex-col items-center justify-start'>
      <Tabs defaultValue='albums'>
        <TabsList>
          <TabsTrigger value='albums'>Albums</TabsTrigger>
          <TabsTrigger value='songs'>Songs</TabsTrigger>
          <TabsTrigger value='artists'>Artists</TabsTrigger>
        </TabsList>
        <TabsContent value='albums'>Albums Data.</TabsContent>
        <TabsContent value='songs'>Songs Data.</TabsContent>
        <TabsContent value='artists'>Artists Data.</TabsContent>
      </Tabs>
    </div>
  )
}

export default App
