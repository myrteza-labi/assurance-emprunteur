import Articles from "../article.json"; import Head from "next/head" ; export default function Assuranceemprunteuripp() { let test = Articles.map((article) => { return article["data"][13]["contenu"];});return <div><Head> <meta name="description" content="Le courtier spécialisé en assurance emprunteur ipp vous permet de bien comprendre l\'assurance emprunteur ipp pour choisir la meilleure solution"/> </Head><div className=" pageGenerees pageArticle" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}