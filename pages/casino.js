import Consommations from "../consommations.json"; import Head from "next/head" ; export default function Casino() { let test = Consommations.map((conso) => { return conso["data"][5]["contenu"];});return <div><Head> <meta name="description" content="avis Casino - Pour votre cr&eacute;dit consommation, obtenez le meilleur taux avec le sp&eacute;cialiste du credit en ligne assurance-emprunteur.com"/> </Head><div className=" pageGenerees pageConso" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}