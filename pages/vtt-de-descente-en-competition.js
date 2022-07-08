import Sports from "../sports.json";
import Head from "next/head";
export default function Vttdedescenteencompetition() {
  let test = Sports.map((sport) => {
    return sport["data"][76]["contenu"];
  });
  return (
    <div>
      <Head>
        {" "}
        <meta
          name="description"
          content="Vous pratiquez le sport VTT de descente en compétition, vous n\'êtes pas assuré de trouver une assurance emprunteur qui couvre le risque sportif lié à votre activité de VTT. Assurez vous avec le courtier assurance-emprunteur.com"
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageSport"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
