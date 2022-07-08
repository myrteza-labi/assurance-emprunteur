import Racines from "../racine.json";
import Head from "next/head";
export default function Risqueaggrave() {
  let test = Racines.map((racine) => {
    return racine["data"][3]["contenu"];
  });
  return (
    <div>
              <div className="mainImageHeader mainImageHeaderRisqueAggrave"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="L\'assurance emprunteur et le risque aggrave : Consulter notre dossier special risques aggrave et assurance emprunteur pour bien comprendre les risques aggravés et les garanties d emprunt"
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageRacine"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
 