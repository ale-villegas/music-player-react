/* eslint-disable react/prop-types */
import BoxHeader from "../BoxHeader"
import Artist from "./Artist"


const Artists = ({artists}) => {
  return (
    <div className="central-box">

    <div className="songs"> 
    <BoxHeader field1="Artists" field2="PlayCount"/>
    <div className="container-rigth">
        

    {artists?.map((artist)=> {
      return(
        <Artist key={artist.name} artist={artist}/>
      )
    })}
    </div>
    </div>
    </div>
  )
}

export default Artists