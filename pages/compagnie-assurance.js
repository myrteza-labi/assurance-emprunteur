import Racines from "../racine.json"; import Head from "next/head" ; export default function Compagnieassurance() { let test = Racines.map((racine) => { return racine["data"][2]["contenu"];});return <div><Head> <meta name="description" content="Comparez les différents organismes qui peuvent vous proposer des assurances emprunteurs et économisez sur le remboursement de votre crédit."/> </Head><div className=" pageGenerees pageRacine" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}