import Racines from "../racine.json"; import Head from "next/head" ; export default function Droitemprunteur() { let test = Racines.map((racine) => { return racine["data"][1]["contenu"];});return <div><Head> <meta name="description" content="Droit des emprunteurs : restez connecte avec le monde de l'assurance emprunteur en consultant les information importantes et les actualites de l'assurance d'emprunt"/> </Head><div className=" pageGenerees pageRacine" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}