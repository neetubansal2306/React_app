import React from "react";
// import PropTypes from'prop-types';
// import {a} from 'react-router-dom';
import TextForm from "./TextForm";
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/"/>
              {props.title}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-a active" aria-current="page" href="/">
                  Home
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <a className="nav-a" href="About.js">
                    {props.aboutText}
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={()=>props.toggleMode('primary')} style={{height: '30px' , width:'30px' , cursor: 'pointer' , border: '2px solid white'}}></div>
                <div className="bg-success rounded mx-2" onClick={()=>props.toggleMode('success')} style={{height: '30px',width:'30px' , cursor: 'pointer', border: '2px solid white'}}></div>
                <div className="bg-warning rounded mx-2" onClick={()=>props.toggleMode('warning')} style={{height: '30px',width:'30px' , cursor: 'pointer' , border: '2px solid white'}}></div>
                <div className="bg-danger rounded mx-2" onClick={()=>props.toggleMode('danger')} style={{height: '30px',width:'30px' , cursor: 'pointer', border: '2px solid white'}}></div>
                <div className="bg-light rounded mx-2" onClick={()=>props.toggleMode('light')} style={{height: '30px',width:'30px' , cursor: 'pointer' , border: '2px solid black'}}></div>
                <div className="bg-dark rounded mx-2" onClick={()=>props.toggleMode('rgb(24,37,50)')} style={{height: '30px',width:'30px' , cursor: 'pointer' , border: '1px solid white'}}></div>


              </div>
              {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
              {/* <div
                className={`form-check form-switch text-${
                  props.mode === 'light' ? 'dark' : 'light'
                }`}
              > */}
                {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Enable Dark Mode
                </label> */}
                {/* <input
                  className="form-check-input"
                  onClick={()=>props.toggleMode('null')}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                /> */}
              {/* </div> */}
            </div>
          </div>
        </nav>
      </div>
      {/* Hello i am a navbar! */}
    </>
  );
}
// {
  /* Navbar.propTypes = { title: PropTypes.string.isRequired, 
                      aboutText: PropTypes.string 
 }
 Navbar.defaultProps= { title: "textUtils", 
                        aboutText: "about text here"
}; */
// }
