import "./navigation.scss";
import logo from "lib/image/logo.png";
import React from "react";

class Navigation extends React.Component {
render(){
  return (
    <header>
      <h1 className="logo">
        <a href="#ssr">
          <img src={logo} alt={logo} />
        </a>
      </h1>
      <nav>
        <ul id="myMenu">
          <li data-menuanchor="about">
            <a href="#about">ABOUT</a>
          </li>
          <li data-menuanchor="product">
            <a href="#product">PRODUCT</a>
          </li>
          <li data-menuanchor="benefit">
            <a href="#benefit">BENEFIT</a>
          </li>
          <li data-menuanchor="contact">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
}

export default Navigation;

