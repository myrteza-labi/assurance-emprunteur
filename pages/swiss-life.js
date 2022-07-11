import Compagnies from "../compagnies.json";
import Head from "next/head";
export default function Swisslife() {
  let test = Compagnies.map((compagnie) => {
    return compagnie["data"][21]["contenu"];
  });
  return (
    <div>
              <div className="mainImageHeader mainImageHeaderSwisslife"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Avec Swiss Life, bénéficiez d\'une assurance emprunteur complète pour votre crédit. Vous pouvez en effet réduire vos mensualités."
        />{" "}
      </Head>
      <div
        className=" pageGenerees compagnieAssurance"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
