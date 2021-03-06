import Racines from "../racine.json";
import Head from "next/head";
export default function Dossier() {
  let test = Racines.map((racine) => {
    return racine["data"][8]["contenu"];
  });
  return (
    <div>
        <div className="mainImageHeader mainImageHeaderDossier"></div>

      <Head>
        
        {" "}
        <meta
          name="description"
          content="Consultez le dossier Assurance Emprunteur du courtier en ligne indépendant pour obtenir toutes les informations avant de négocier votre taux d\'assurance emprunteur"
        />{" "}
      </Head>
      
      <div
        className=" pageGenerees pageRacine"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
