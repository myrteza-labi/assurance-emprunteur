import Compagnies from "../compagnies.json";
import Head from "next/head";
export default function Ugip() {
  let test = Compagnies.map((compagnie) => {
    return compagnie["data"][23]["contenu"];
  });
  return (
    <div>
                      <div className="mainImageHeader mainImageHeaderUgip"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Vous avez désormais le droit de choisir l\'organisme pour votre assurance emprunteur. Choisissez Ugip et économisez sur vos frais de remboursement."
        />{" "}
      </Head>
      <div
        className=" pageGenerees compagnieAssurance"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
