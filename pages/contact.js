import { useState } from "react";
import Head from "next/head";

function Contact() {
  const [man, setMan] = useState(" ");
  const [woman, setWoman] = useState(" ");
  const [manCircle, setManCircle] = useState("radio_button_unchecked");
  const [womanCircle, setWomanCircle] = useState("radio_button_unchecked");

  function handleManClick(e) {
    if (man == "checked") {
      return;
    } else if (man == " ") {
      setMan("checked");
      setManCircle("done");
      setWomanCircle("radio_button_unchecked");
      setWoman(" ");
    }
  }

  function handleWomanClick(e) {
    if (woman == "checked") {
      return;
    } else if (woman == " ") {
      setWoman("checked");
      setWomanCircle("done");
      setManCircle("radio_button_unchecked");
      setMan(" ");
    }
  }

  return (
    <div className="Contact">
      <Head>
        <meta
          name="description"
          content="Avant de vous faire une offre de prêt immobilier, la banque peut exiger que vous obteniez une assurance emprunteur. La banque en fixe les garanties"
        />
        <meta
          name="description"
          content="Contact assurance pret : Contacter un courtier en assurance de prêt efficace et pas cher . Comparer son assurance crédit immobilier en ligne + devis"
        />
        <title>Contact assurance pret</title>
      </Head>
      <div className="contactMainContainer">
        <h1 className="h1Contact">Contact assurance pret</h1>

        <form className="SelectBox" action="">
          <label htmlFor="object" className="selectTitle">
            Objet de votre demande de contact :{" "}
          </label>
          <div className="selectCtn">
            <span className="material-symbols-outlined selectOptionArrow">
              expand_more
            </span>
            <select id="votre" className="select">
              <option className="option">Questions diverse </option>
              <option className="option">Données personnelles</option>
              <option className="option">Gestion de mes emails</option>
              <option className="option">Partenariat / Sponsoring</option>
              <option className="option">Problème rencontré sur le site</option>
              <option className="option">Réclamation</option>
              <option className="option">Sécurtié</option>
            </select>
          </div>

          <label className="selectTitle">Votre civilité </label>
          <div className="selectCtn">
            <div className="civiliteBoxContainer ">
              <div
                onClick={handleWomanClick}
                className={"civiliteBox " + woman}
              >
                <span className="material-symbols-outlined civiliteIcon">
                  woman
                </span>
                <label className="civiliteLabel" htmlFor="huey">
                  Madame
                </label>
                <span className="material-symbols-outlined circleIconCivilite">
                  {womanCircle}
                </span>
              </div>

              <div onClick={handleManClick} className={"civiliteBox " + man}>
                <span className="material-symbols-outlined civiliteIcon">
                  man
                </span>
                <label className="civiliteLabel" htmlFor="huey">
                  Monsieur
                </label>
                <span className="material-symbols-outlined circleIconCivilite">
                  {manCircle}
                </span>
              </div>
            </div>

            <div className="inputTextContainer">
              <label htmlFor="prenom" className="selectTitle">
                Prénom :{" "}
              </label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                className="inputText"
              />
            </div>

            <div className="inputTextContainer">
              <label htmlFor="nom" className="selectTitle">
                Nom :{" "}
              </label>
              <input id="nom" name="nom" type="text" className="inputText" />
            </div>

            <div className="inputTextContainer">
              <label htmlFor="email" className="selectTitle">
                Adress email :{" "}
              </label>
              <input
                name="email"
                id="email"
                placeholder="Ex : romain.sebas@email.com"
                type="email"
                className="inputText"
              />
            </div>

            <div className="inputTextContainer">
              <label htmlFor="message" className="selectTitle">
                Votre message :{" "}
              </label>
              <textarea
                id="message"
                className="inputText"
                placeholder="Merci d'indiquer la raison de votre demande"
                name="story"
                rows="5"
                cols="33"
              ></textarea>
            </div>

            <input
              type="submit"
              className="buttonSubmitContact"
              value={"Envoyer"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
