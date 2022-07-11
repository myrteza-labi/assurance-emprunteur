import Risques from "../risques.json";
import Head from "next/head";
export default function Sport() {
  let test = Risques.map((risque) => {
    return risque["data"][3]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderSport"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Vous pratiquez un sport extrême et souhaitez quand même mener des projets de vie? Une assurance emprunteur avec un volet risque aggravé sport vous concerne."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageRisque"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
