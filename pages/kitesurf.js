import Sports from "../sports.json"; import Head from "next/head" ; export default function Kitesurf() { let test = Sports.map((sport) => { return sport["data"][78]["contenu"];});return <div><Head> <meta name="description" content="La pratique du kitesurf est un sport à risque. Cependant profitez de nos contrats groupes afin de trouver la meilleure offre d\'assurance emprunteur kitesurf pour garantir votre crédit."/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}