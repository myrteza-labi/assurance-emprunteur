import Divers from "../divers.json"; import Head from "next/head" ; export default function Assuranceempruntpermanent() { let test = Divers.map((diver) => { return diver["data"][0]["contenu"];});return <div><Head> <meta name="description" content="Assurance pour un emprunt renouvelable dit crédit permanent. Toute offre de pret est généralement garantie par une assurance de prêt en cas d\'accident de la vie de l\'emprunteur"/> </Head><div className=" pageGenerees pageDiverse" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}