import Compagnies from "../compagnies.json"; import Head from "next/head" ; export default function Cnp() { let test = Compagnies.map((compagnie) => { return compagnie["data"][10]["contenu"];});return <div><Head> <meta name="description" content="CNP assurance emprunteur : votre assurance emprunteur moins chere : avec la compagnie assurance emprunteur, comparez cnp, simuler votre tarif en ligne gratuitement sur assurance-emprunteur.com"/> </Head><div className=" pageGenerees compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}