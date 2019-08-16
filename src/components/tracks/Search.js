import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };
  findTrack = (dispatch, e) => {
      e.preventDefault();

      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=f5ea45c1c8fb098deb912574e46f2c10`)
        .then(res => {
            dispatch({
              type: 'SEARCH_TRACKS',
              payload: res.data.message.body.track_list
            });

            this.setState({trackTitle:''})
        })
        .catch(err => console.log(err));
  }
  onChange = e => {
      this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-2 p-0 background">
              <h4 className="text-center color-change">
                <i className="fas fa-search" /> Find a song
              </h4>
              <p className="lead text-center color-change">...and sing along!</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                  <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Song title..." 
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                    />
                  </div>
                  <button className="btn btn-primary btn-block btn-lg mb-3 bb" type="submit">Find Song</button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
