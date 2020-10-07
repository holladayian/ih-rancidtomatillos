import React, { Component } from 'react';
import './WelcomingSection.scss';

export function WelcomingSection() {

  return(
    <div className="movie-section">
      <h1 className="user-welcome">Welcome!</h1>
      <h2 className="user-name">Ian Holliday</h2>
      <h3 className="movie-day">Rate your next movie</h3>
    </div>
  )
}