import Sports from "../sports.json"; import Head from "next/head" ; export default function Obtenirmeilleurtaux() { let test = Sports.map((sport) => { return sport["data"][1]["contenu"];});return <div><Head> <meta name="description" content="recherche emprunt meilleur taux : prêts personnels avec lestaux plutôt attrayants"/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}