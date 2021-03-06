import React, { PropTypes, Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

// const Loading = ({color}) => {
//   return (
//     <div className={color === "white" ? "spinner white" : "spinner"}>
//       <div className="bounce1"></div>
//       <div className="bounce2"></div>
//       <div className="bounce3"></div>
//     </div>
//   )
// }

const Loading = ({color}) => {
  return (
    <CircularProgress style={{display:'block', textAlign:'center', width:'auto'}}/>
  )
}



Loading.propTypes = {
  color: React.PropTypes.string
}

Loading.defaultPropTypes = {
  color: "black"
}

Loading.displayName = "Loading";

module.exports = Loading;
export default Loading;
