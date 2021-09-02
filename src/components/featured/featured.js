import React from 'react';
import './featured.scss';
import {InfoOutlined, PlayArrow} from '@material-ui/icons';
import Info_image from './outerbanks.png';
function Featured({type}) {
  return (
    <div className="featured">
      {type&& (
        <div className="category">
          <span>{type==="movies" ? "Movies": "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="romantic">Romantic</option>
            <option value="drama">Drama</option>
            <option>Genre</option>
            <option>Genre</option>
            <option>Genre</option>
            <option>Genre</option>
            <option>Genre</option>
          </select>
        </div>
      )}
      <img width="100%" src="https://wallpapercave.com/wp/wp6279620.jpg" alt="user"/>
      <div className="info">
        <img src={Info_image} alt="outerbanks"/>
        <span className="desc">
        The show follows a group of Pogue teenagers who live at The Cut, and are determined to find out what happened to the missing father of the group's ringleader, John B. Along the way, they discover a legendary treasure that is tied to John B's father.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;