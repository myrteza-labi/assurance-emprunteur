import Articles from "../article.json"; import Head from "next/head" ; export default function Courtierassuranceemprunteursenior() { let test = Articles.map((article) => { return article["data"][19]["contenu"];});return <div><Head> <meta name="description" content="Consultez le courtier en assurance emprunteur senior pour obtenir une garantie de crédit immobilier au meilleur tarif"/> </Head><div className=" pageGenerees pageArticle" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}