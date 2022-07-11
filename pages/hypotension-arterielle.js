import Maladies from "../maladies.json";
import Head from "next/head";
export default function Hypotensionarterielle() {
  let test = Maladies.map((maladie) => {
    return maladie["data"][37]["contenu"];
  });
  return (
    <div>
      <Head>
        {" "}
        <meta
          name="description"
          content="Assurer un prêt en cas d\'hypotension artérielle, pour les assureurs, le « risque aggravé de santé » n\'est pas prise en charge par toutes les offres d\'assurance credit."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pagesMaladie"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
