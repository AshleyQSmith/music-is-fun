export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <button class="btn btn-block btn-outline-primary my-2" type="button" onclick="app.songsController.activeSong('${this._id}')">
    <h5>${this.artist}</h5>
    <h5>${this.title}</h5>
  </button>`;
  }

  getActiveSongTemplate() {
    return `
    <div class="card" style="">
    <img src="${this.albumArt}" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">${this.title}</h3>
      <p class="card-text"><h4>${this.artist}</h4><h6>${this.album}</h6><h6>$${this.price}</h6></p>
      <audio controls><source src="${this.preview}"></audio>
      <a href="#" class="btn btn-primary" onclick="app.songsController.addSong('${this._id}')">Add to Playlist</a>
    </div>
  </div>
    `
  }

  getMyActiveSongTemplate() {
    return `
    <div class="card" style="">
    <img src="${this.albumArt}" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">${this.title}</h3>
      <p class="card-text"><h4>${this.artist}</h4><h6>${this.album}</h6><h6>$${this.price}</h6></p>
      <audio controls><source src="${this.preview}"></audio>
    </div>
  </div>
    `
  }

  get playlistTemplate() {
    return `
    <button type="button" class="close text-danger" onclick="app.songsController.removeSong('${this._id}')">
    <span>&times;</span>
    <button class="btn btn-block btn-outline-primary my-2" type="button" onclick="app.songsController.myActiveSong('${this._id}')">

    <h5>${this.artist}</h5>
    <h5>${this.title}</h5>
  </button>
          `;
  }
}
