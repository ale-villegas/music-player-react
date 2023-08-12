/* eslint-disable react/prop-types */
import { useMatch } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { getArtistsSongs } from "../../services/artistSongs"
import Song from "./Song"
import BoxHeader from "../BoxHeader"
import { useContext } from "react"
import { ContextSongs } from "../favoritesSongs/ContextSongs"


const ArtistSongs = () => {
const artist = useMatch("/artists/:artist")
const {dispatcherPlaying} = useContext(ContextSongs)


  const {data: songs} = useFetch(getArtistsSongs, artist.params.artist)

  const handlePlay = (song) => {
    dispatcherPlaying({
      type: "PLAY_SONG", 
      payload: songs.map(e => e.name !==  song.name ? e : {...song, isPlaying : true})
    })
  }


  return ( 
<>
<div className="central-box">

<div className="songs"> 
<BoxHeader field1={artist.params.artist} />
   <div className="container-rigth">




   {songs?.map((song) => {
     return(
       <Song key={song.name} song={song}  handlePlay={() => handlePlay(song)} />
     )
   })}
   </div>
   </div>
   </div>
    
 
    </>
  )
}

export default ArtistSongs