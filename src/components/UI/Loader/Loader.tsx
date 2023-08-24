import React from 'react';
import "./Loader.scss"

interface IStylesProps{
  props?:string
}
const Loader = (props:IStylesProps) => {
  return (
    <div {...props} className="container-for-loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;