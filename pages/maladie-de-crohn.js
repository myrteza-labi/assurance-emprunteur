import Maladies from "../maladies.json";
import Head from "next/head";
export default function Maladiedecrohn() {
  let test = Maladies.map((maladie) => {
    return maladie["data"][21]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderCrohn"></div>
      <Head>
        {" "}
        <meta
          name="description"
          content="Pour emprunter en étant atteint de la maladie de Crohn  ; faites appel à un courtier expert en risque aggravé médical pour trouver une solution"
        />{" "}
      </Head>
      <div
        className=" pageGenerees pagesMaladie"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
