import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Cardiopathie() { let test = Maladies.map((maladie) => { return maladie["data"][6]["contenu"];});return <div><Head> <meta name="description" content="Réaliser un emprunt quand on est atteint d\'une maladie comme la cardiopathie peut être problématique ; il est conseillé de faire appel a un courtier expert"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}