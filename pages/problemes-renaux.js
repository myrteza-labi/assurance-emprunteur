import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Problemesrenaux() { let test = Maladies.map((maladie) => { return maladie["data"][28]["contenu"];});return <div><Head> <meta name="description" content="Faites jouer la concurrence entre les compagnies d\'assurance pour souscrire votre contrat d\'assurance emprunteur avec risque aggravé de santé problèmes rénaux. 
"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}