/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ContextSongs = createContext() 

const stateLiked = JSON.parse(window.localStorage.getItem("liked-songs")) || []

const currentPlaying = {
    playlist : [],
    activeSong:{}
  
}
    




const reducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case "LIKE_SONG": 
        const exist = state.find((song) => song.name === payload.name)
        if(!exist) {
            const changeToTrue = {...payload, isLiked : true}
            const newState =  [...state, changeToTrue]
            window.localStorage.setItem("liked-songs", JSON.stringify(newState))
            return newState
        }
        break
        case "UNLIKE_SONG": 
        const filterSongs = state.filter((song) => song.name !== payload.name)
       
        window.localStorage.setItem("liked-songs", JSON.stringify(filterSongs))
        
        return filterSongs

        
        default: 
        return state
    }
} 


const reducerPlaylist = (state, action) => {
    const {type, payload} = action 
    switch(type){
        case "PLAY_SONG": 
        const activeSong = payload.find((song)=> song.isPlaying)
        return {playlist: payload, activeSong}

        case  "PAUSE_SONG": 
        const statePause = {...state, activeSong: {...payload, isPlaying: !state.activeSong.isPlaying}}

        return statePause

        case "NEXT_SONG": 
        if(payload) {
            
           const nextIndexRandom = Math.floor(Math.random() * state.playlist.length) 
         
           return {...state, activeSong: {...state.playlist[nextIndexRandom], isPlaying: true} } 
        }
        
        const nextIndex = state.playlist.findIndex(e => e.name === state.activeSong.name) + 1

       return {...state, activeSong: {...state.playlist[nextIndex], isPlaying: true} } 


       case "PREV_SONG": 

       const prevIndex = state.playlist.findIndex(e => e.name === state.activeSong.name) - 1

       return {...state, activeSong: {...state.playlist[prevIndex], isPlaying: true} } 

    }
}


export const ProviderSongs = ({children}) => {


const [playing, dispatcherPlaying] = useReducer(reducerPlaylist, currentPlaying)
const [likedSongs, dispatcherLike] = useReducer(reducer, stateLiked)
const [input, setInput] = useState("")

const navigate = useNavigate()



    const handleChange = (event) => { 
      setInput(event.target.value)
  

        setTimeout(() => {
    if(event.target.value === ""){
      navigate("/")
      return
    }
    else{
      navigate(`/search/${event.target.value}`)
    }
            
        }, 1500)
        

    }

    return ( 
        <ContextSongs.Provider value={{likedSongs, dispatcherLike, playing, dispatcherPlaying, input, handleChange}}>
            {children}
        </ContextSongs.Provider>
    )
}
