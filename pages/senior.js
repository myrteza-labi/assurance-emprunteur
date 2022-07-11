import Risques from "../risques.json";
import Head from "next/head";
export default function Senior() {
  let test = Risques.map((risque) => {
    return risque["data"][1]["contenu"];
  });
  return (
    <div>
                    <div className="mainImageHeader mainImageHeaderSenior"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Contrats assurance emprunt ultra-compétitifs pour les emprunteurs seniors, les risques aggravés \'seniors\' sont couvert pour les emprunteurs. Emprunteur senior : négociez le meilleur taux d\'intérêt."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageRisque"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
