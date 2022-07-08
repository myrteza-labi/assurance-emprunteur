import Articles from "../article.json";
import Head from "next/head";
export default function Substitutionassuranceemprunt() {
  let test = Articles.map((article) => {
    return article["data"][36]["contenu"];
  });
  return (
    <div>
      <Head>
        {" "}
        <meta
          name="description"
          content="comment réaliser la substitution d\'une assurance emprunteur pour un pret immobilier en cours de paiement. Le courtier assurance-emprunteur.com peut vous aider à changer de garantie"
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageArticle"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
