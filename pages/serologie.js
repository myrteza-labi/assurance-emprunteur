import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Serologie() { let test = Maladies.map((maladie) => { return maladie["data"][9]["contenu"];});return <div><Head> <meta name="description" content="Faites jouer la concurrence entre les compagnies d\'assurance pour bénéficier de la meilleure assurance emprunteur avec risque de santé sérologie ! 
"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}