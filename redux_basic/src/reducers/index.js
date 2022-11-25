import {combineReducers} from 'redux';

const songsReducer = ()=>{
  return [
    {title:'Sorry',duration:'3:05'},
    {title:'Shape of you',duration:'3:25'},
    {title:'Shivers',duration:'4:35'},
    {title:'Perfect',duration:'3:40'},
  ];  
};

const selectedSongReducer = (selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})