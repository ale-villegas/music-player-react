/* eslint-disable react/prop-types */
import { useContext } from "react"
import BoxHeader from "./BoxHeader"
import Song from "./artist/Song"
import { ContextSongs } from "./favoritesSongs/ContextSongs"
import { useFetch } from "../hooks/useFetch"
import { getSearch } from "../services/search"


const ResultsSearch = () => {

 const {input} = useContext(ContextSongs)
    const {dispatcherPlaying} = useContext(ContextSongs)
const {data : results} = useFetch(getSearch, input) 

console.log(results)

    const handlePlay = (song) => {
        dispatcherPlaying({
          type: "PLAY_SONG", 
          payload: results.map(e => e.name !==  song.name ? e : {...song, isPlaying : true})
        })
      }
  return (
    <div className="central-box">

<div className="songs"> 
<BoxHeader field1= "Results"/>
   <div className="container-rigth">




   {results?.map((song) => {
     return(
       <Song key={song.name} song={song}  handlePlay={() => handlePlay(song)} />
     )
   })}
   </div>
   </div>
   </div>
    
  )
}

export default ResultsSearch