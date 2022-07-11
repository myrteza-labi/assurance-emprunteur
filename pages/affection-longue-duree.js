import Maladies from "../maladies.json";
import Head from "next/head";
export default function Affectionlongueduree() {
  let test = Maladies.map((maladie) => {
    return maladie["data"][44]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderAffection"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Le courtier assurance emprunteur permet aux personnes atteintes d\'une affection longue durée d\'Assurer leur prêt en s\'appuyant sur la convention aeras"
        />{" "}
      </Head>
      <div
        className=" pageGenerees pagesMaladie"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
