import type { NextPage } from 'next'
//import '../styles/global.css'
import { trpc } from "@/utils/trpc";
import { getOptionsForVote } from '@/utils/getRandomPokemon';

const Home: NextPage = () => {
  // const {data , isLoading} = trpc.useQuery(["hello", {text: "Amrit"}]) //calling query name of backed->router
  
  // if(isLoading){
  //   return <div>Loading...</div>
  // }
  
  // if(data){
  //   return <div>{data.greeting}</div>
  // }

  const [first, second] = getOptionsForVote();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center align-center-middle">
    
      <div className="text-2xl text-center">Which pokemon is rounder?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-800">{first}</div>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-800">{second}</div>
      </div>

    </div>
  )
}

export default Home
