
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return{
    getSong: (track) => {
      dispatch({
        type: 'GET_SONG',
        payload: track,
      })
    }
  }
}


const Song = ({ track, getSong }) => {
  useEffect(() => {
    console.log(track);
  }, []);

return(
  
  <div className="py-3 trackHover" onClick={()=>{getSong(track)}}>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
)
     
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
