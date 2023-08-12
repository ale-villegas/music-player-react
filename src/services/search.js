

export const getSearch = async (input) => {
    if (!input) return 
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${input}&api_key=${import.meta.env.VITE_LASTFM_KEY}&format=json`
    const data = await fetch(url)
    const toJson = await data.json()
    return toJson.results.trackmatches.track
   



}