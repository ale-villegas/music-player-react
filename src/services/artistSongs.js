import { songsAdapter } from "../adapters/artists"

export const getArtistsSongs = async (artist) => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${import.meta.env.VITE_LASTFM_KEY}&format=json`

    const rawData = await fetch(url)
    const data = await rawData.json()
    const {toptracks} = data
    const {track} = toptracks 



    return songsAdapter(track)

}