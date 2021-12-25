import type { NextPage } from 'next'
//import '../styles/global.css'
import { trpc } from "@/utils/trpc";
import { getOptionsForVote } from '@/utils/getRandomPokemon';
import { useState } from 'react';

const Home: NextPage = () => {
  // const {data , isLoading} = trpc.useQuery(["hello", {text: "Amrit"}]) //calling query name of backed->router
  
  // if(isLoading){
  //   return <div>Loading...</div>
  // }
  
  // if(data){
  //   return <div>{data.greeting}</div>
  // }

  //const [first, second] = useMemo(() => getOptionsForVote(), []);
  const [ids, updateIds] = useState(() => getOptionsForVote());
  const [first, second] = ids;

  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", {id: first }]);
  //console.log(firstPokemon.data);

  const secondPokemon = trpc.useQuery(["get-pokemon-by-id", {id: second }]);
  
  if(firstPokemon.isLoading || secondPokemon.isLoading) return null;

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center align-center-middle">
    
      <div className="text-2xl text-center">Which pokemon is rounder?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-64 h-64 flex flex-col">
          <img src={firstPokemon.data?.sprites.front_default!} className="w-full"/>
          <div className='text-xl text-center capitalize mt-[-2rem]'>{firstPokemon.data?.name}</div>
        </div>
        <div className="p-8">Vs</div>
        <div className="w-64 h-64 flex flex-col">
          <img src={secondPokemon.data?.sprites.front_default!} className="w-full"/>
          <div className='text-xl text-center capitalize mt-[-2rem]'>{secondPokemon.data?.name}</div>
        </div>
        <div className='p-2'/>
      </div>

    </div>
  )
}

export default Home
