//MainHome.js
import React,{ useState } from 'react';
import './App.css';
import Navigate from './Navigation';
import { BrowserRouter } from 'react-router-dom';


function Home() {

  let workout = "가슴 루틴 추천";

  const styleLetter = {
    color: 'white', // 글자색을 하얀색으로 설정
  };

  const style = {
    backgroundImage: 'url("AN.jpg")',
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
  };
  const overlay = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    backdropFilter: 'blur(5px)', 
  };

  let welcome = "어세오세요 지옥에!";

  function func(){
    return "go to the f gym"
  };

  function nav() {
    return (
      <div>
        <Navigate />
      </div>
    );
  }

  return (
    <div style = {style}>
    <div style = {overlay}>
    <div className="App">
      <div className="head">
        <div>welcome to hellchang</div>
      </div>
      <div className="list">
        <h3 style = {styleLetter}>{workout}</h3>
      </div>
      <div className="list">
        <h3 style = {styleLetter}>{workout}<span>😀</span></h3>
      </div >
      <div className="list">
        <h3 style = {styleLetter}>{workout}</h3>
      </div>
      <h4 style = {styleLetter}>{welcome}
        </h4>
        <h2>{nav()}</h2>
    </div>
    </div>
    </div>
  );
}
export default Home;
