import React from 'react';

import Navigation from 'components/main/navigation';
import SSR from 'components/main/ssr';
import About from 'components/main/about';
import Members from 'components/main/members';
import Product from 'components/main/product';
import Benefit from 'components/main/benefit';
import Contact from 'components/main/contact';
import ReactFullpage from '@fullpage/react-fullpage';

const fullpageOptions = {
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
    slidesNavigation: true
};

export default function MainPage() {
    return (
        <React.Fragment>
            <Navigation/>
            <ReactFullpage
                {...fullpageOptions}
                render={({state, fullpageApi} : any) => {
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
