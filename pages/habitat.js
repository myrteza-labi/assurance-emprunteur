import Credits from "../credits.json";
import Head from "next/head";
export default function Habitat() {
  let test = Credits.map((credit) => {
    return credit["data"][19]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderHabitat"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Simulation Assurance Emprunteur - Grâce à Assurance Emprunteur, simulez votre crédit habitat. Choisissez ainsi l\'offre au meilleur taux et, pour votre sécurité, souscrivez une assurance."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageCredit"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
