import React from "react";
import logo from "../img/logo.png";
import logobcc from "../img/logo-bbc.png";
import logoforbes from "../img/logo-forbes.png";
import techcrunch from "../img/logo-techcrunch.png";
import logobi from "../img/logo-bi.png";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>

      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={logobcc} alt="Seen on logo 1" />
        <img src={logoforbes} alt="Seen on logo 2" />
        <img src={techcrunch} alt="Seen on logo 3" />
        <img src={logobi} alt="Seen on logo 4" />
      </div>
    </div>
  );
}
