import Credits from "../credits.json";
import Head from "next/head";
export default function Bancaire() {
  let test = Credits.map((credit) => {
    return credit["data"][8]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderBancaire"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Avant de vous engager dans un emprunt bancaire, faites appel aux services du courtier indépendant Assurance-Emprunteur.com pour comparer les offres et prendre votre décision."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageCredit"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
