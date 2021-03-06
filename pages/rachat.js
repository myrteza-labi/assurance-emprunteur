import Credits from "../credits.json";
import Head from "next/head";
export default function Rachat() {
  let test = Credits.map((credit) => {
    return credit["data"][2]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderRachat"></div>

      <Head>
        {" "}
        <meta
          name="description"
          content="Si vous êtes en situation d\'endettement excessif, vous pouvez avoir recours au rachat de crédit. Avec Assurance Emprunteur, comparez les différentes possibilités."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageCredit"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
