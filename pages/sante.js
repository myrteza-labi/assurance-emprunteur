import Risques from "../risques.json";
import Head from "next/head";
export default function Sante() {
  let test = Risques.map((risque) => {
    return risque["data"][0]["contenu"];
  });
  return (
    <div>
        <div className="mainImageHeader mainImageHeaderSante"></div>
      <Head>
        {" "}
        <meta
          name="description"
          content="Vous avez des difficultés à rembourser un prêt à cause d\'une maladie? Évaluez vos solutions pour risque aggravé de santé avec Assurance Emprunteur."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageRisque"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
