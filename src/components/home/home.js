import './home.scss';
import Navigation from './navigation/navigation';
import SSR from './ssr/ssr';
import About from './about/about';
import About2 from './about2/about2';
import Product from './product/product';
import Benefit from './benefit/benefit';
import Contact from './contact/contact';


import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const fullpageOptions = {
    sectionsColor: ['#FFF', '#90827D', '#90827D', '#7C8C89', '#72789D', '#929292'],
    anchors: [
        'ssr',
        'about',
        'about',
        'product',
        'benefit',
        'contact'
    ],
    callbacks: ['onLeave'],
    menu: '#myMenu',
    responsiveWidth: 600,
    fitToSection: false,
    recordHistory: false,
    dragAndMove: true,
    slidesNavigation: true,
};

class HomePage extends React.Component {
    render() {
    return (
        <div>
        <Navigation/>
        <ReactFullpage
            {...fullpageOptions}
            render={({state, fullpageApi}) => {
                return (
                    <div id="fullpage-wrapper">
                        
                        <SSR/>
                        <About/>
                        <About2/>
                        <Product/>
                        <Benefit/>
                        <Contact/>
                    </div>
                );
            }}/>
        </div>
    );
    }
}

export default HomePage;
