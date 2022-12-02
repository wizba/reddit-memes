import React from 'react';
const Loader = (props) => {
  return (
    <div className="column  d-flex align-items-center justify-content-center">
      <div>
        <div>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="text text-center myColor">
          <b>loading ...</b>
        </div>
      </div>
    </div>
  );
};


export default Loader;