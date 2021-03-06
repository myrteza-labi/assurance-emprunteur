import Compagnies from "../compagnies.json";
import Head from "next/head";
export default function Generali() {
  let test = Compagnies.map((compagnie) => {
    return compagnie["data"][11]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderGenerali"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Pensez à souscrire votre assurance emprunteur avec Generali et faites des économies sur votre crédit immobilier. Pensez long terme avec Generali."
        />{" "}
      </Head>
      <div
        className=" pageGenerees compagnieAssurance"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
