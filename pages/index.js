import React, { useState } from 'react';
import Link from 'next/link'

export default function Home() {
  
  
  
  const [mobileMenuClassName, setMobileMenuClassName] = useState(" ");
  function handleMobileMenuBtnClck(){
    mobileMenuClassName == " " ? setMobileMenuClassName("mobileMenuDisplay") :  setMobileMenuClassName(" "); 
  }

  /* Desktop UI  */
  const desktopHeader = (
    <header className="headerHomeMobile">
      <div className="logoCtnMobile ">
        <img
          src="/AmericanBank-horizontal.png"
          width="400px"
          height="auto"
          alt=""
          className="logo "
        />
      </div>
      <navbar className="navbar ">
        <ul className="navbarUl ">
          <div className="navbarPartOne">
            <li className="navbarItem">
              <a href="#" className="navbarLink">
                Accueil
              </a>
            </li>
            <li className="navbarItem">
              <a href="#" className="navbarLink">
                Qui somme nous
              </a>
            </li>
            <li className="navbarItem">
              <a href="#" className="navbarLink">
                Servcies
              </a>
            </li>
            <li className="navbarItem">
              <a href="#" className="navbarLink">
                Notre histoire
              </a>
            </li>
          </div>
          <div className="navbarPartTwo">
            <li className="navbarItem">
              <a href="#" className="navbarLink">
                Contact
              </a>
            </li>
            <li className="navbarItem">
              <a href="#" className="navbarLink">
                Location
              </a>
            </li>
            <li className="navbarItem">
              <a href="#" className="navbarLink">
                Search
              </a>
            </li>
          </div>
        </ul>
      </navbar>
    </header>
  );




  /* MOBILE UI  */
  const mobileUi = (
    <div className=" homeMainPageCtn">



      <div className="sectionMainImageMobile">
        <h1 className="textMainImageMobileOne">
          <span className="insideTextPartOneMobile">Première partie</span><br/>
          <span className="insideTextPartTwotMobile">DEUXIEME PARTIE</span>
        </h1>
      </div>


      <div className="itemsContainerMobile">
        <div className="itemMobile">
          <span className="material-symbols-outlined">
              call
          </span>
        </div>
        <div className="itemMobile">
          <span className="material-symbols-outlined">
              pin_drop
          </span>
        </div>
        <div className="itemMobile">
          <span className="material-symbols-outlined">
            search
          </span>
        </div>
        <div className="itemMobileText">
          <p className="itemMobileTextPara">CONTACT</p>
        </div>
      </div>

      <div className="simpleTextMobile">
        <h2 className="simpleTextMobileH2">Je suis un titre h2</h2>
        <p className="simpleTextParagraphe">Je suis un paragraphe simple Je suis un paragraphe simple Je suis un paragraphe simple Je suis un paragraphe simple </p>
      </div>

      <div className="themeSectionMobile">
        <div className="oneThemeRowMobile">
          <div className="themeImageMobile">
            <span className="material-symbols-outlined themeIconMobile">
              home
            </span>
          </div>
          <div className="themeTitleMobile">LE TITRE DU THEME</div>
            <span className="material-symbols-outlined themeArrowMobile">
              arrow_right
            </span>
        </div>
        <div className="oneThemeRowMobile">
          <div className="themeImageMobile">
            <span className="material-symbols-outlined themeIconMobile">
              euro
            </span>
          </div>
          <div className="themeTitleMobile">LE TITRE DU THEME</div>
            <span className="material-symbols-outlined themeArrowMobile">
              arrow_right
            </span>
        </div>
        <div className="oneThemeRowMobile">
          <div className="themeImageMobile">
            <span className="material-symbols-outlined themeIconMobile">
              handshake
            </span>
          </div>
          <div className="themeTitleMobile">LE TITRE DU THEME</div>
            <span className="material-symbols-outlined themeArrowMobile">
              arrow_right
            </span>
        </div>
      </div>

      <div className="articleContainerMobile">
        <div className="articleMobile">
          <div className="titleAndIconArticleContainerMobile">
            <h3 className="articleTitleMobile">Titre article</h3>
            <span className="material-symbols-outlined articleArrowMobile">
              arrow_right
            </span>
          </div>
          <p className="articleParagrapheMobile">Voici un paragraphe de mon article Voici un paragraphe de mon article Voici un paragraphe de mon article Voici un paragraphe de mon articleVoici un paragraphe de mon article </p>
        </div>
        <div className="articleMobile">
          <div className="titleAndIconArticleContainerMobile">
            <h3 className="articleTitleMobile">Titre article</h3>
                        <span className="material-symbols-outlined articleArrowMobile">
              arrow_right
            </span>
          </div>
          <p className="articleParagrapheMobile">Paragraphe article </p>
        </div>
        <div className="articleMobile">
          <div className="titleAndIconArticleContainerMobile">
            <h3 className="articleTitleMobile">Titre article</h3>
                        <span className="material-symbols-outlined articleArrowMobile">
              arrow_right
            </span>
          </div>
          <p className="articleParagrapheMobile">Paragraphe article </p>
        </div>
      </div>


      <div className="advertiseContainerMobile">
        <h3 className="advertiseTitleMobile">Voici un slogan publicitaire assez court mais beau</h3>
        <button className="advertiseButtonMobile">BUTTON PUB</button>
      </div>


      
    </div>
  );




  return (
    <div className="Home ">
      {mobileUi}
    </div>
    )
}
