import Compagnies from "../compagnies.json"; import Head from "next/head" ; export default function Agipi() { let test = Compagnies.map((compagnie) => { return compagnie["data"][36]["contenu"];});return <div><Head> <meta name="description" content="agipi assurance emprunteur la compagnie assurance emprunteur moins chere : 15000€ d\'&eacute;conomie sur votre assurance emprunteur en comparant agipi, devis en 
ligne pour assurance emprunteur imm&eacute;diat avec votre courtier specialiste de l\'assurance emprunteur."/> </Head><div className=" pageGenerees compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}