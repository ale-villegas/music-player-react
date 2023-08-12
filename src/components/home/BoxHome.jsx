/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const BoxHome = ({title, link, color, fontColor}) => {
  return (
    <Link to={link}><div className="box-home" style={{backgroundColor: color, color: fontColor}}>
        <h1>{title}</h1>
    </div>
    </Link>
  )
}

export default BoxHome