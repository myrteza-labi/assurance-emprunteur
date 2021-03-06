import Credits from "../credits.json";
import Head from "next/head";
export default function Professionnel() {
  let test = Credits.map((credit) => {
    return credit["data"][29]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderProfessionnel"></div>
      <Head>
        {" "}
        <meta
          name="description"
          content="Avec Assurance Emprunteur, comparez les différents emprunts professionnels et obtenez le meilleur taux. Souscrivez une assurance adaptée à votre profil"
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageCredit"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
 