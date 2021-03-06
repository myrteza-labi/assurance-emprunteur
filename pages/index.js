import React, { useState } from 'react';
import Link from 'next/link'

export default function Home() {
  
  
  
  const [mobileMenuClassName, setMobileMenuClassName] = useState(" ");
  function handleMobileMenuBtnClck(){
    mobileMenuClassName == " " ? setMobileMenuClassName("mobileMenuDisplay") :  setMobileMenuClassName(" "); 
  }

  /* Desktop UI  */
  /*
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
*/



  /* MOBILE UI  */
  const mobileUi = (
    <div className=" homeMainPageCtn">



      <div className="sectionMainImageMobile">
        <h1 className="textMainImageMobileOne">
          <span className="insideTextPartOneMobile">Assurance </span>
          <span className="insideTextPartTwotMobile">Emprunteur</span>
        </h1>
      </div>


      <div className="itemsContainerMobile">
        <div className="itemMobile">
        <Link href="/immobilier">
          <span className="material-symbols-outlined itemThemeBar">
              house
          </span>
        </Link>
        </div>
        <div className="itemMobile">
        <Link href="/emprunt">
          <span className="material-symbols-outlined itemThemeBar">
              euro
          </span>
        </Link>
        </div>
        <div className="itemMobile">
        <Link href="/garantie-emprunteur">
          <span className="material-symbols-outlined itemThemeBar">
              handshake
          </span>
        </Link>
        </div>

        <div className="itemMobileText">
        <Link href="/contact">
          <a className="itemMobileTextPara">
          CONTACT
          </a>
        </Link>
      </div>
      </div>
 
      <div className="simpleTextMobile">
        <h2 className="simpleTextMobileH2">Comparateur d'assurancce</h2>
        <p className="simpleTextParagraphe">Pour mieux se prot??ger lors d???un pr??t immobilier, il vous est fortement conseill?? de  vous souscrire ?? une assurance emprunteur immobilier.</p>
      </div>

      <div className="themeSectionMobile">
        <div className="oneThemeRowMobile">
          <div className="themeImageMobile">
            <span className="material-symbols-outlined themeIconMobile">
              home
            </span>
          </div>
          <div className="themeTitleMobile">
          <Link href="/immobilier">
          <a>
          IMMOBILIER
          </a>
        </Link>
          </div>
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
          <div className="themeTitleMobile">          <Link href="/emprunt">
          <a>
          EMPRUNT
          </a>
        </Link></div>
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
          <div className="themeTitleMobile"><Link href="/garantie-emprunteur">
          <a>
          GARANTIES
          </a>
        </Link></div>
            <span className="material-symbols-outlined themeArrowMobile">
              arrow_right
            </span>
        </div>
      </div>

      <div className="articleContainerMobile">
        <div className="articleMobile">
          <div className="titleAndIconArticleContainerMobile">
            <h3 className="articleTitleMobile">?? propos de l'assurance emprunteur</h3>

          </div>
          <p className="articleParagrapheMobile">Certaines obligations sur l???assurance emprunteur immobilier  vous seront impos??es afin de vous faire accorder votre pr??t immobilier. Par contre, vous ??tes libre de choisir votre taux de couverture.</p>
        </div>
        <div className="articleMobile">
          <div className="titleAndIconArticleContainerMobile">
            <h3 className="articleTitleMobile">L'assurance emprunteur est-elle obligatoire?</h3>

          </div>
          <p className="articleParagrapheMobile">Ni la loi ni les banques ne peuvent vous obliger ?? souscrire ?? ce genre d???assurance. Pourtant, nombreuses sont celles qui vont vous refuser votre pr??t immobilier sans elle, ce qui revient au m??me.</p>
        </div>
        <div className="articleMobile">
          <div className="titleAndIconArticleContainerMobile">
            <h3 className="articleTitleMobile">Changer d'assurance pr??t immobilier</h3>

          </div>
          <p className="articleParagrapheMobile">La loi donne aujourd???hui aux emprunteurs la possibilit?? de changer d'assurance pr??t immobilier dans un d??lai de 12 mois apr??s la signature du pr??t. Une fois ce d??lai d??pass??, il n???est plus possible de d??l??guer l???assurance.</p>
        </div>
      </div>


      <div className="advertiseContainerMobile">
        <h3 className="advertiseTitleMobile">??conomisez sur vos assurances</h3>
        <button className="advertiseButtonMobile"><Link href="/devis-assurance-emprunteur">
          <a>
          Obtenir un devis
          </a>
        </Link></button>
      </div>
    </div>
  );




  return (
    <div className="Home ">
      {mobileUi}
    </div>
    )
}

