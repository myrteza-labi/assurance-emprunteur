import Compagnies from "../compagnies.json"; import Head from "next/head" ; export default function Fmgmagpm() { let test = Compagnies.map((compagnie) => { return compagnie["data"][35]["contenu"];});return <div><Head> <meta name="description" content="fmgm agpm assurance emprunteur la compagnie assurance emprunteur moins chere : 15000€ d\'&eacute;conomie sur votre assurance emprunteur fmgm agpm,"/> </Head><div className=" pageGenerees compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}