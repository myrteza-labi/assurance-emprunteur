import Risques from "../risques.json";
import Head from "next/head";
export default function Metier() {
  let test = Risques.map((risque) => {
    return risque["data"][2]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderMetier"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Vous faites partie de ces personnes qui pratiquent une activité professionnelle particulière? Choisissez une assurance emprunteur qui prend un en compte le risque professionnel."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageRisque"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
