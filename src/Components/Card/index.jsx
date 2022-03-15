import React from 'react';
import './Card.css';
import LOGO from '../assets/logo.svg';
import ILLUSTRATION from '../assets/illustration-mockups.svg';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Card() {
  return (
    <div className='container'>
      <header className='header'>
        <img src={LOGO} alt='' className='logo' />
      </header>
      <main className='main'>
        <div className='image'>
          <img
            src={ILLUSTRATION}
            alt=''
            className='illustration'
          />
        </div>
        <div className='text'>
          <h3>
            Build The Community Your Fans Will
            Love
          </h3>
          <p>
            Huddle re-imagines the way we build
            communities. You have a voice, but so
            does your audience. Create connections
            with your users as you engage in
            genuine discussion.
          </p>
          <button className='register-btn'>
            Register
          </button>
        </div>
      </main>
      <footer className='footer'>
        <div className='icons'>
          <FacebookIcon className='facebook-icon' />
          <TwitterIcon className='twitter-icon' />
          <InstagramIcon className='instagram-icon' />
        </div>
      </footer>
    </div>
  );
}
