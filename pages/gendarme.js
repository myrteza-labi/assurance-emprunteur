import Metiers from "../metiers.json"; import Head from "next/head" ; export default function Gendarme() { let test = Metiers.map((metier) => { return metier["data"][15]["contenu"];});return <div><Head> <meta name="description" content="Le m&eacute;tier gendarme peut engendrer une surprime, des exclusions, voir un refus lors d\'une demande d\'assurance de pret immobilier afin de garantir un credit immobilier si l\'emprunteur est gendarme"/> </Head><div className=" pageGenerees pageMetier" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}