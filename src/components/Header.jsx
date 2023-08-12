import  { useContext } from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { ContextSongs } from './favoritesSongs/ContextSongs'

const Header = () => {

    const {input, handleChange} = useContext(ContextSongs)
const goBack = () => {
    window.history.back()
  }

  
  return (
    <header> 
      
    <MdOutlineArrowBack size={20} fill='white' onClick={goBack} style={{cursor:"pointer"}}/> 
    <Link to={"/"}><h3>Music App</h3></Link>
    <input type="text" className="search" placeholder='Search..' value={input} onChange={handleChange} />
    
  
   

<Link to="/your-songs">Your songs</Link>
  </header>

  )
}

export default Header