import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuClassName, setMobileMenuClassName] = useState(" ");
  function handleMobileMenuBtnClck() {
    mobileMenuClassName == " "
      ? setMobileMenuClassName("mobileMenuDisplay")
      : setMobileMenuClassName(" ");
  }

  /* MOBILE UI  */
  const mobileUi = (
    <header className="headerMobile">
      <navbar className="navbarMobile">
        <div className="navbarButtonContainerMobile">
          <button
            onClick={handleMobileMenuBtnClck}
            className="buttonNavbarMobile"
          >
            <span className="material-symbols-outlined burgerIconMobile">menu</span>
          </button>
        </div>

        <div className="mobileNavbarPartTwo">
          <div className="navbarLogoContainerMobile">
            <img
              src="/AmericanBank-horizontal.webp"
              width="250px"
              height="auto"
              alt=""
              className="navbarLogoMobile "
            />
          </div>
        </div>
      </navbar>
    </header>
  );

  const mobileMenu = (
    <div className={"mobileMenu " + mobileMenuClassName}>
      <div className="oneMobileMenuItem">
        <Link href="/">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Accueil
          </a>
        </Link>
        <span className="material-symbols-outlined itemArrowMenuMobile">
          chevron_right
        </span>
      </div>

      <div className="oneMobileMenuItem">
        <Link href="/compagnie-assurance">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Compagnies
          </a>
        </Link>
        <span className="material-symbols-outlined itemArrowMenuMobile">
          chevron_right
        </span>
      </div>
      <div className="oneMobileMenuItem">
        <Link href="/">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Buisiness
          </a>
        </Link>
        <span className="material-symbols-outlined itemArrowMenuMobile">
          chevron_right
        </span>
      </div>
      <div className="oneMobileMenuItem">
        <Link href="/contact">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Contact
          </a>
        </Link>
        <span className="material-symbols-outlined itemArrowMenuMobile">
          chevron_right
        </span>
      </div>
    </div>
  );

  return (
    <div className="Home ">
      {mobileUi}
      {mobileMenu}
    </div>
  );
}
