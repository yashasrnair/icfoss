import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
return (
    <div className='footer-container'>
    <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Join the Adventure newsletter to receive our key to the Future
        </p>
        <p className='footer-subscription-text'>
        You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
        <form>
            <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
        </div>
    </section>
    <section className='social-media'>
        <div className='social-media-wrap'>
        <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            ICFOSS.CEK
            <i className='fab fa-typo3' />
            </Link>
        </div>
        <small className='website-rights'>ICFOSS.CEK #WebTeam © 2024</small>
        <div className='social-icons'>
            <Link
            className='social-icon-link facebook'
            to='https://www.facebook.com/ICFOSS/'
            target='_blank'
            aria-label='Facebook'
            >
            <i className='fab fa-facebook-f' />
            </Link>
            <Link
            className='social-icon-link instagram'
            to='https://www.instagram.com/icfoss.in/'
            target='_blank'
            aria-label='Instagram'
            >
            <i className='fab fa-instagram' />
            </Link>
            <Link
            className='social-icon-link youtube'
            to='https://www.youtube.com/channel/UCskKbOu_s_VxcK7QOfbvb4w'
            target='_blank'
            aria-label='Youtube'
            >
            <i className='fab fa-youtube' />
            </Link>
            <Link
            className='social-icon-link twitter'
            to='https://x.com/i/flow/login?redirect_after_login=%2Ffosskerala'
            target='_blank'
            aria-label='Twitter'
            >
            <i className='fab fa-twitter' />
            </Link>
            <Link
            className='social-icon-link twitter'
            to='https://in.linkedin.com/company/icfoss'
            target='_blank'
            aria-label='LinkedIn'
            >
            <i className='fab fa-linkedin' />
            </Link>
        </div>
        </div>
    </section>
    </div>
);
}

export default Footer;