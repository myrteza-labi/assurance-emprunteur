import Racines from "../racine.json";
import Head from "next/head";
export default function Guide() {
  let test = Racines.map((racine) => {
    return racine["data"][5]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderGuide"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="L\'assurance emprunteur assure certaines garanties. Prenez connaissance des garanties actives sur votre contrat d\'assurance."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageRacine"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
