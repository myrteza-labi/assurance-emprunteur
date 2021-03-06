import Maladies from "../maladies.json";
import Head from "next/head";
export default function Cancer() {
  let test = Maladies.map((maladie) => {
    return maladie["data"][0]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderCancer"></div>
      <Head>
        <meta
          name="description"
          content="Obtenir une assurance emprunteur est obligatoire pour réaliser un emprunt immobilier. Malgré la maladie cancer il est possible d\'obtenir une garantie avec le courtier en ligne."
        />
      </Head>
      <div
        className=" pageGenerees pagesMaladie"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
