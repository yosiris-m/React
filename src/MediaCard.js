import "./styles/MediaCard.css";
import React from "react";

class MediaCard extends React.Component {
  render() {
    let fav;
    if (this.props.favorite) {
      fav = <i className="fas fa-heart"></i>;
    } else {
      fav = <i className="far fa-heart"></i>;
    }

    return (
      <div className="App">
        <main className="App-header">
          <div className="hero">
            <img className="image" src={this.props.photo}></img>
            <div className="lastName">{this.props.name}</div>
          </div>
          <div>{this.props.date}</div>

          <p className="parraf">{this.props.text}</p>
        </main>
        <footer className="App-header">
          <p>leer más...</p>
          <div>
            <span>{this.props.likes}</span>
            {fav}
          </div>
        </footer>
      </div>
    );
  }
}

export default MediaCard;
