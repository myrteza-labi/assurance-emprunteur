import Credits from "../credits.json";
import Head from "next/head";
export default function Personnel() {
  let test = Credits.map((credit) => {
    return credit["data"][0]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderPersonnel"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="L\'emprunt à la consommation, sûrement le plus commun, peut s\'accompagner d\'une assurance emprunteur afin de vous protéger des accidents de la vie."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageCredit"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
