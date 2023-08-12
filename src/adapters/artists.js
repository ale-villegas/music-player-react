export const adapterArtists = (artists) => {
  return artists.map((artist) => {
    return {
      name: artist.name,
      playcount: artist.playcount,
      listeners: artist.listeners,
    };
  });
};

export const songsAdapter = (songs) => {
  return songs.map((song) => {
    return {
      artist: song.artist.name,
      name: song.name,
      playcount: song.playcount,
      

    };
  });
};
