import Secondaires from "../secondaire.json"; import Head from "next/head" ; export default function Assurancejeuneemprunteur() { let test = Secondaires.map((secondaire) => { return secondaire["data"][15]["contenu"];});return <div><Head> <meta name="description" content="les jeunes emprunteurs sont ceux qui b&eacute;n&eacute;ficie le plus de la loi lagarde en pouvant mettre en concurrence facilement les comapgnies d\'assurance pret agressives comme april, alptis ou encore swiss life"/> </Head><div className=" pageGenerees pageSecondaire" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}