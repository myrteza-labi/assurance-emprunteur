import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Herniediscale() { let test = Maladies.map((maladie) => { return maladie["data"][27]["contenu"];});return <div><Head> <meta name="description" content="En cas d\'hernie discale, souscrire un emprunt immobilier peut être complexe au niveau de l\'obtention de l\'assurance d\'emprunt"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}