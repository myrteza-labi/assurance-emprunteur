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
          <span className="insideTextPartOneMobile">Assurance</span><br/>
          <span className="insideTextPartTwotMobile">Emprunteur</span>
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
        <Link href="/contact">
          <a className="itemMobileTextPara">
          CONTACT
          </a>
        </Link>
      </div>
      </div>
 
      <div className="simpleTextMobile">
        <h2 className="simpleTextMobileH2">Comparateur d'assurancce</h2>
        <p className="simpleTextParagraphe">Pour mieux se protéger lors d’un prêt immobilier, il vous est fortement conseillé de  vous souscrire à une assurance emprunteur immobilier.</p>
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
            <h3 className="articleTitleMobile">À propos de l'assurance emprunteur</h3>

          </div>
          <p className="articleParagrapheMobile">Certaines obligations sur l’assurance emprunteur immobilier  vous seront imposées afin de vous faire accorder votre prêt immobilier. Par contre, vous êtes libre de choisir votre taux de couverture.</p>
        </div>
        <div className="articleMobile">
          <div className="titleAndIconArticleContainerMobile">
            <h3 className="articleTitleMobile">L'assurance emprunteur est-elle obligatoire?</h3>

          </div>
          <p className="articleParagrapheMobile">Ni la loi ni les banques ne peuvent vous obliger à souscrire à ce genre d’assurance. Pourtant, nombreuses sont celles qui vont vous refuser votre prêt immobilier sans elle, ce qui revient au même.</p>
        </div>
        <div className="articleMobile">
          <div className="titleAndIconArticleContainerMobile">
            <h3 className="articleTitleMobile">Changer d'assurance prêt immobilier</h3>

          </div>
          <p className="articleParagrapheMobile">La loi donne aujourd’hui aux emprunteurs la possibilité de changer d'assurance prêt immobilier dans un délai de 12 mois après la signature du prêt. Une fois ce délai dépassé, il n’est plus possible de déléguer l’assurance.</p>
        </div>
      </div>


      <div className="advertiseContainerMobile">
        <h3 className="advertiseTitleMobile">Économisez sur vos assurances</h3>
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

