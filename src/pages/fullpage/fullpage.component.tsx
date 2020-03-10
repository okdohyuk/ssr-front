import React from 'react';

import Navigation from 'pages/fullpage/navigation';
import SSR from 'pages/fullpage/ssr';
import About from 'pages/fullpage/about';
import Members from 'pages/fullpage/members';
import Product from 'pages/fullpage/product';
import Benefit from 'pages/fullpage/benefit';
import Contact from 'pages/fullpage/contact';
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
    dragAndMove: true,
    slidesNavigation: true,
};

export default function HomePage() {
    return (
        <React.Fragment>
            <Navigation/>
            <ReactFullpage
                {...fullpageOptions}
                render={({state, fullpageApi}: any) => {
                    return (
                        <ReactFullpage.Wrapper>

                            <SSR/>
                            <About/>
                            <Members/>
                            <Product/>
                            <Benefit/>
                            <Contact/>
                        </ReactFullpage.Wrapper>
                    );
                }}/>
        </React.Fragment>
    );
}
