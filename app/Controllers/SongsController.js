import store from "../store.js";
import SongService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  let songs = store.State.songs
  let template = ''
  songs.forEach(song => template += song.Template)
  document.getElementById("songs").innerHTML = template
}


/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let songs = store.State.playlist
  let template = ''

  songs.forEach(song => template += song.playlistTemplate)
  document.getElementById("playlist").innerHTML = template
  console.log('whatever - playlist is happeninggggg')
}

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your subscribers
    store.subscribe('songs', _drawResults)
    store.subscribe('playlist', _drawPlaylist)
  }

  // play song - moves it into the middle. has option to play or add to playlist
  activeSong(id){
    SongService.activeSong(id)
  }

  myActiveSong(id){
    SongService.myActiveSong(id)
  }


  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
    e.target.reset()
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {
    SongService.addSong(id)
  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {
    SongService.removeSong(id)
  }
}
