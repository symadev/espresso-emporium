
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Component/CoffeeCard'

function App() {
  const coffees = useLoaderData()


  return (
    <>
     
      <h1 className='text-6xl font-bold'>Espresso Emporium :{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
       coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>) 
        
      }
      </div>
      
      
    </>
  )
}

export default App
