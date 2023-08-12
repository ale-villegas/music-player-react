/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { ContextSongs } from "../favoritesSongs/ContextSongs";
import { BsPauseCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
//<AiOutlineHeart className="like-button" size={20}/>
const Song = ({ song, handlePlay }) => {
  const { likedSongs, dispatcherLike, playing, dispatcherPlaying } = useContext(ContextSongs);

  const isLiked = likedSongs.find(
    (favSong) => favSong.name === song.name
  );

const isPlaying = song.name === playing.activeSong.name

  //
  const handleClick = (song) => {
console.log(song)
    if (isLiked) {
      dispatcherLike({
        type: "UNLIKE_SONG",
        payload: song,
      });
    } else {
      dispatcherLike({
        type: "LIKE_SONG",
        payload: song,
      });
    }
  };

  const handlePause = (song) => {
dispatcherPlaying({
  type: "PAUSE_SONG",
  payload: song
})
  }




  return (
    <div className="box-artist-song" key={song.name}>
      <strong>{song.name}</strong>
      <Link to={`../artists/${song.artist}`}><span>{song.artist}</span></Link>
      <span>{song.playcount}</span>
      <div className="buttons">
        {isPlaying && playing.activeSong.isPlaying ? 
       <BsPauseCircle size={22} onClick={() => handlePause(song)} style={isPlaying && {fill: "rgb(114, 18, 204)"}}/>
        :
       
        <AiFillPlayCircle className="play-button" size={22} onClick={handlePlay} style={isPlaying && {fill: "rgb(114, 18, 204)"}}/>
        }
       
         
          
    

        <AiFillHeart
          className="like-button"
          size={22}
          onClick={() => handleClick(song)}
          style={isLiked && { fill: "rgb(114, 18, 204)" }}
        />
      </div>
    </div>
  );
};

export default Song;
