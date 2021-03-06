import Racines from "../racine.json";
import Head from "next/head";

export default function Emprunt() {
  let test = Racines.map((racine) => {
    return racine["data"][4]["contenu"];
  });
  return (
    <div>
        <div className="mainImageHeader mainImageHeaderEmprunt"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Quel type d\'emprunt pour quel type de projet? Chaque type d\'emprunt présente des avantages bien particuliers : découvrez les différentes formules et choisissez selon votre projet."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageRacine"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
