import React from "react";
import {Link} from 'react-router-dom';

const Track = props => {
  const { track } = props;

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4>{track.artist_name}</h4>
          <p>
            <strong>
              <i className="fas fa-play" /> Track
            </strong>
            : {track.track_name} <br />
            <strong>
              <i className="fas fa-compact-disc" /> Alabum
            </strong>
            : {track.album_name} <br />
            <strong>
              <i className="fas fa-exclamation-triangle" /> Explicit Content 
            </strong>
            : {track.explicit === 0 ? 'No' : 'Yes'}
          </p>
          <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block lyrics">
            <i className="fas fa-chevron-right"></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
