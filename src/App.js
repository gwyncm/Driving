import React from 'react';
import Redcar from './redcar.svg';
import Bluecar from './bluecar.svg';

import './App.css';

const  text = `
  I was making a left turn as the light turned yellow. 
  Suddenly I noticed a car running a red light. 
  I narrowly missed him in my turn. 
  Discuss the actions that should have been taken by each driver.
  `
const  bluerun = `@keyframes Blue-run {
  0% { transform: rotate(270deg) translate(0px,700px); }
  70% { transform: rotate(270deg) translate(0px,0px); }
  100% { transform: rotate(270deg) translate(0px,0px); }
}
@media (prefers-reduced-motion: no-preference) {
  .Bluecar { animation: Blue-run infinite 5s linear; }
}`

const  redrun = `@keyframes Red-run {
  0% { transform: rotate(90deg) translate(400px,140px); }
  70% { transform: rotate(30deg) translate(180px,70px); }
  100% { transform: rotate(0deg) translate(110px); }
}
@media (prefers-reduced-motion: no-preference) {
  .Redcar { animation: Red-run infinite 5s linear; }
}`

function addStyle(astyle) {
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = astyle;
document.getElementsByTagName('head')[0].appendChild(style);
}

function Car(props) {
  return(
    <div>
      { addStyle(props.run)}
      <div style={{ "position": "absolute", "left": props.left, "top": props.top}}>
      <img src={props.car} style={{ "height": "150px" }} className={props.name} alt={props.name} />
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <header className="App-header">
      <h6 style={{"verticleAlign": "center"}}> { text }</h6>
      </header>
        <div className="App-back" >
          <Car car={Redcar} left={"560px"} top={"420px"} name={"Redcar"} run={redrun}></Car>
          <Car car={Bluecar} left={"200px"} top={"645px"} name={"Bluecar"} run={bluerun}></Car>
        </div>
    
    </div>
  );
}

export default App;
