import { useContext } from "react"
import { ContextSongs } from "./ContextSongs"
import Song from "../artist/Song"
import BoxHeader from "../BoxHeader"


const FavoritesSongs = () => {

    const {likedSongs, dispatcherPlaying} = useContext(ContextSongs)
   

    const handlePlay = (song) => {
      dispatcherPlaying({
        type: "PLAY_SONG", 
        payload: likedSongs.map(e => e.name !==  song.name ? e : {...song, isPlaying : true})
      })
    }
  return (
    <>
    <div className="central-box">

<div className="songs"> 
  <BoxHeader field1="Favorites Songs" field2="Artist" />

   <div className="container-rigth">

 



   {likedSongs.map((song) => {
     return(
       <Song key={song.name} song={song}  handlePlay={()=> handlePlay(song)}/>
     )
   })}
   </div>
    
   </div>
   </div>
    </>
  )
}

export default FavoritesSongs