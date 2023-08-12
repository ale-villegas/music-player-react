/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Artist = ({artist}) => {

  
  return (
    <Link className="link" to={artist.name}> <div className="box-artist-song" key={artist.name}>
      <strong>{artist.name}</strong>
      <span>{artist.playcount}</span>
     

    </div></Link>
  )
}

export default Artist