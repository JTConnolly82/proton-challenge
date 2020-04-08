import React from 'react';
import './App.css';


const Park = (props) => {

  const acreage = () => {
    let acres = props.Area.split('acres')[0].trim();
    acres = acres.split('.')[0];
    return acres;
  }

  let established = () => {
    let est = props.Established.split(',')[1].trim();
    return est
  }


  return (
    <div className='park-container' >
      <div className='park-header'>
        <img className='park-image' src={props.Image}/>
      </div>
      <div className='park-content'>
        <div className='park-name-est'>
          <h2 id='park-name'>{props.Name}</h2>
          <h4 id='established-date'>Est. {established()}</h4>
        </div>
        <div style={{height: '1px', backgroundColor: 'lightgrey'}}></div>
        <div className='park-acres-visitors'>
          <span style={{display: 'flex'}}><h3 style={{marginRight: '5px'}}>Acres:</h3><h4>{acreage()}</h4></span>
          <span style={{display: 'flex'}}><h3 style={{marginRight: '5px'}}>Visitors: </h3><h4>{props["Recreation visitors"]}</h4></span>
        </div>
        {/* <div style={{height: '1px', backgroundColor: 'lightgrey'}}></div> */}
        <h4>{props.Description}</h4>
      </div>
    </div>
  )
}


export default Park;