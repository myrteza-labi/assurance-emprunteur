import Compagnies from "../compagnies.json";
import Head from "next/head";
export default function Alptis() {
  let test = Compagnies.map((compagnie) => {
    return compagnie["data"][6]["contenu"];
  });
  return (
    <div>
              <div className="mainImageHeader mainImageHeaderAlptis"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Grâce aux assurances emprunteurs Alptis, faites des économies sur le remboursement total de votre crédit. Comparez les solutions."
        />{" "}
      </Head>
      <div
        className=" pageGenerees compagnieAssurance"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
