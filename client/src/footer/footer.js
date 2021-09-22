import React from 'react';

import { ReactComponent as FacebookIcon } from './facebook.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkdinIcon } from './linkdin.svg';
import { ReactComponent as GithubIcon } from './github.svg';


import './footer.scss';

const Footer = () => (
    <footer class="pv4 ph3 ph5-ns tc">
        <div className='social-icons-container'>
            <a href="https://www.facebook.com/BraveTogether2018" title="facebook">
                <FacebookIcon />
            </a>
            <a href='https://www.instagram.com/brave_together_insta/' title="instagram">
                <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCHry9px4UrXGZWgptKYm0EQ" title="youtube">
                <YoutubeIcon />
            </a>
            <a href="https://www.linkedin.com/company/brave-together-%D7%9E%D7%A6%D7%A2%D7%93-%D7%94%D7%92%D7%91%D7%95%D7%A8%D7%94/" title="linkdin">
                <LinkdinIcon />    
            </a>
            <a href="https://github.com/gallib2/brave-together" title="github">
                <GithubIcon />
            </a>
        </div>
        <div class="mt4 text-buttons-container">
            <a href="#" class="f6 link dim gray dib mr3 mr4-ns">עזרה</a>
            <a href="#" class="f6 link dim gray dib mr3 mr4-ns">צור קשר</a>
            <a href="#" class="f6 link dim gray dib mr3 mr4-ns">אודות</a>
            <a href="https://brave-together.com/" class="f6 link dim gray dib mr3 mr4-ns">אתר רשמי</a>
        </div>
    </footer>
);
export default Footer;