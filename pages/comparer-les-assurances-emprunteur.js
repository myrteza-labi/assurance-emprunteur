import Articles from "../article.json"; import Head from "next/head" ; export default function Comparerlesassurancesemprunteur() { let test = Articles.map((article) => { return article["data"][2]["contenu"];});return <div><Head> <meta name="description" content="Pour bien choisir votre assurance, il faut réaliser un comparatif des meilleures assurances immobilières. Comparer, permet d\'étudier les différentes offres pour être sur de sélectionner la bonne assurance"/> </Head><div className=" pageGenerees pageArticle" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}