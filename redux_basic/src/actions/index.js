//action creator -Actions are normal javascript object with type and payload two keys and payload are optional but the type is not optional
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}
