import Consommations from "../consommations.json"; import Head from "next/head" ; export default function Avisfranceloisirsfinance() { let test = Consommations.map((conso) => { return conso["data"][13]["contenu"];});return <div><Head> <meta name="description" content="avis France Loisirs Finance - Pour votre crédit consommation, obtenez le meilleur taux avec le spécialiste du credit en ligne assurance-emprunteur.com"/> </Head><div className=" pageGenerees pageConso" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}