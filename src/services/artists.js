import { adapterArtists } from "../adapters/artists"

const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${import.meta.env.VITE_LASTFM_KEY}&format=json`
export const getArtists = () => {
   return fetch(url)
   .then(res => res.json())
   .then( ({artists}) => { 
    const {artist} = artists
    return adapterArtists(artist)
     
   } )
   
}