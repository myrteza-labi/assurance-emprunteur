import Articles from "../article.json"; import Head from "next/head" ; export default function Assuranceemprunteurprofessionnel() { let test = Articles.map((article) => { return article["data"][17]["contenu"];});return <div><Head> <meta name="description" content="Recherchez la garantie de credit avec l\'aide du Courtier assurance emprunteur pour votre projet de pret professionnel"/> </Head><div className=" pageGenerees pageArticle" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}