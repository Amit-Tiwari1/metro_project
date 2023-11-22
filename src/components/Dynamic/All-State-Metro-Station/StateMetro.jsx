import React from 'react';
import { NavLink } from "react-router-dom"

const StateMetro = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-12 col-12 shadow mb-5 bg-body rounded border">
            <div className="heading mt-4 mb-5">
              <h3>Search Metro Routes in India</h3>
              <p>Select from all the active metro networks given, and find a route map and fare info.</p>
            </div>
            <div className="metroStation-list">
              <div className="row justify-content-center">
                <div className="col-md-8 List">
                  <NavLink to='/mumbai'><li>Mumbai</li></NavLink>
                  <NavLink to='/lucknow'><li>Lucknow</li></NavLink>
                  <NavLink to='/delhi'><li>Delhi</li></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StateMetro