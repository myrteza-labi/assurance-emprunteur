import Maladies from "../maladies.json";
import Head from "next/head";
export default function Hypertensionarterielle() {
  let test = Maladies.map((maladie) => {
    return maladie["data"][38]["contenu"];
  });
  return (
    <div>
      <div className="mainImageHeader mainImageHeaderHypertenstion"></div>

      <Head>
        {" "}
        <meta name="description" content="" />{" "}
      </Head>
      <div
        className=" pageGenerees pagesMaladie"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
