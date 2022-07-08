import Compagnies from "../compagnies.json";
import Head from "next/head";
export default function April() {
  let test = Compagnies.map((compagnie) => {
    return compagnie["data"][1]["contenu"];
  });
  return (
    <div>
              <div className="mainImageHeader mainImageHeaderApril"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Souscrivez une assurance emprunteur avec April pour vous substituer en cas d’événement majeur : votre décès, la perte de votre emploi ou tout autre terme prévu dans le contrat."
        />{" "}
      </Head>
      <div
        className=" pageGenerees compagnieAssurance"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
 