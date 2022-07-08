import Compagnies from "../compagnies.json";
import Head from "next/head";
export default function Allianz() {
  let test = Compagnies.map((compagnie) => {
    return compagnie["data"][3]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderAllianz"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Comparez différentes offres d\'assurance emprunteur chez Allianz de manière à assurer vos biens immobiliers ou mobiliers."
        />{" "}
      </Head>
      <div
        className=" pageGenerees compagnieAssurance"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
