import Articles from "../article.json"; import Head from "next/head" ; export default function Courtierassuranceemprunteurdefinition() { let test = Articles.map((article) => { return article["data"][20]["contenu"];});return <div><Head> <meta name="description" content="La définition du terme : Courtier en assurance emprunteur - expliqué par le courtier Assurance-Emprunteur.com"/> </Head><div className=" pageGenerees pageArticle" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}