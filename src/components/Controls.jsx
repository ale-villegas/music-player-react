
import { BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { BiSkipNextCircle, BiSkipPreviousCircle, BiShuffle } from "react-icons/bi";
import { useContext, useState } from "react";
import { ContextSongs } from "./favoritesSongs/ContextSongs";
import { AiFillHeart } from "react-icons/ai";

export const Controls = () => {

 const {dispatcherPlaying, playing, likedSongs, dispatcherLike} = useContext(ContextSongs) 
 const [shuffle, setShuffle] = useState(false)

 const isLiked = likedSongs.find(
  (favSong) => favSong.name === playing.activeSong.name
);
 const handleNext = () => {
    dispatcherPlaying({
        type: "NEXT_SONG",
        payload: shuffle
    })
 } 


 const handlePrev = () => {
    dispatcherPlaying({
        type: "PREV_SONG",
    })
 } 


 const handlePlay = () => {
    dispatcherPlaying({
        type: "PAUSE_SONG",
        payload: playing.activeSong
    })
 } 

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
const {name, artist} = playing.activeSong 


const handleShuffle = () => {
    setShuffle(!shuffle)
}
  return (
    <>
      <div className="footer-controls">
        <div className="artist-info-controls" style={{ color: "white" }}>
          <strong>{name}</strong>
          <span>{artist}</span>
        </div>

        <div className="box-controls"> 
        <BiShuffle className="button-control" size={30} color="white" onClick={handleShuffle} style={shuffle && {fill: "rgb(114, 18, 204)"}}/>
          <BiSkipPreviousCircle  className="button-control" color="white" size={35}  onClick={handlePrev}/>

          {
            playing.activeSong.isPlaying ? 
            <BsPauseCircle className="button-control" color="white" size={45} onClick={handlePlay}/>
            :
<BsPlayCircle className="button-control" color="white" size={45} onClick={handlePlay} />
          }
  
            

            
    
          <BiSkipNextCircle className="button-control" color="white" size={35} onClick={handleNext} />

          <AiFillHeart
          className="like-button"
          size={30}
          onClick={() => handleClick(playing.activeSong)}
          color="white"
          style={isLiked && { fill: "rgb(114, 18, 204)" }}
        />
        </div>
      </div>
    </>
  );
};
