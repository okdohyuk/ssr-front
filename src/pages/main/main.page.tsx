import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navigation from 'components/main/navigation';
import SSR from 'components/main/ssr';
import About from 'components/main/about';
import Members from 'components/main/members';
import Product from 'components/main/product';
import Benefit from 'components/main/benefit';
import Contact from 'components/main/contact';

const fullpageOptions = {
  anchors: ['ssr', 'about', 'member', 'product', 'benefit', 'contact'],
  callbacks: ['onLeave'],
  menu: '#myMenu',
  navigation: true,
  fitToSection: false,
  dragAndMove: 'fingersonly',
  slidesNavigation: true,
  controlArrows: false,
};

export default () => {
  return (
    <React.Fragment>
      <Navigation />
      <ReactFullpage
        {...fullpageOptions}
        render={({ fullpageApi }: any) => {
          return (
            <ReactFullpage.Wrapper>
              <SSR />
              <About />
              <Members fullpageApi={fullpageApi} />
              <Product />
              <Benefit />
              <Contact />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </React.Fragment>
  );
};
