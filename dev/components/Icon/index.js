import React from 'react';

import Fb from './icons/icn_fb.svg';
import Ig from './icons/icn_ig.svg';
import Telegram from './icons/icn_telegram.svg';
import Youtube from './icons/icn_youtube.svg';

const Icon = ({ name }) => {
    switch(name) {
        case 'fb': 
            return <Fb />;
        case 'ig':
            return <Ig />;
        case 'telegram':
            return <Telegram />;
        case 'youtube':
            return <Youtube />;
        default: 
            return <span />
    }
};

export default Icon;