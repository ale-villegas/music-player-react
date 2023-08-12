
import './App.css'
import { Controls } from './components/Controls'

import ArtistSongs from './components/artist/ArtistSongs'
import Artists from './components/artist/Artists'
import FavoritesSongs from './components/favoritesSongs/FavoritesSongs'
import { useFetch } from './hooks/useFetch'

import { getArtists } from './services/artists'
import {  Route, Routes} from 'react-router-dom'


import Home from './components/home/Home'


import ResultsSearch from './components/ResultsSearch'
import Header from './components/Header'


function App  () {


const {data : artists} = useFetch(getArtists)




  return (
    <div className='page'>
<Header/>



<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/artists' element={<Artists artists={artists} />} /> 
<Route path='/artists/:artist' element={<ArtistSongs  />} /> 
<Route path='/your-songs' element={<FavoritesSongs/>}/>
<Route path='/search/:search' element={<ResultsSearch/>}/>


</Routes>



    

    

  

      <div className="controls"> 
       <Controls/>

      </div>

    </div>
  )
}

export default App
