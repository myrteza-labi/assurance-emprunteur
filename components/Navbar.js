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
        <Link href="/">
        <div className="navbarLogoContainerMobile">
            <img
              src="/logo-assurance-emprunteur.webp"
              width="250px"
              height="auto"
              alt=""
              className="navbarLogoMobile "
            />
          </div>
        </Link>

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
        <Link href="/emprunt">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Emprunt
          </a>
        </Link>
        <span className="material-symbols-outlined itemArrowMenuMobile">
          chevron_right
        </span>
      </div>
      <div className="oneMobileMenuItem">
        <Link href="/guide">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Blog
          </a>
        </Link>
        <span className="material-symbols-outlined itemArrowMenuMobile">
          chevron_right
        </span>
      </div>
      <div className="oneMobileMenuItem">
        <Link href="/dossier">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Dossier
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



  const DesktopNavbar = (

    
    <navbar className="desktopNavbar">
       
      <Link href="/">
      <div className="">
          <img
            src="/logo-assurance-emprunteur.webp"
            width="250px"
            height="auto"
            alt=""
            className="navbarLogoMobile "
          />
        </div>
      </Link>



      <div className="desktopItemsNavbarContainer">
      <div className="oneMobileMenuItem">
        <Link href="/">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Accueil
          </a>
        </Link>
      </div>

      <div className="oneMobileMenuItem">
        <Link href="/compagnie-assurance">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Compagnies
          </a>
        </Link>

      </div>
      <div className="oneMobileMenuItem">
        <Link href="/emprunt">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Emprunt
          </a>
        </Link>

      </div>
      <div className="oneMobileMenuItem">
        <Link href="/guide">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Blog
          </a>
        </Link>

      </div>
      <div className="oneMobileMenuItem">
        <Link href="/dossier">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Dossier
          </a>
        </Link>

      </div>
      <div className="oneMobileMenuItem">
        <Link href="/contact">
          <a onClick={handleMobileMenuBtnClck} className="itemMenuTitleMobile">
            Contact
          </a>
        </Link>

      </div>
      </div>
      
    </navbar>
);

  return (
    <div className="HeaderNavbarMenu ">
      {DesktopNavbar}
    </div>
  );
}
