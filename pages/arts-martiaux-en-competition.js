import Sports from "../sports.json"; import Head from "next/head" ; export default function Artsmartiauxencompetition() { let test = Sports.map((sport) => { return sport["data"][3]["contenu"];});return <div><Head> <meta name="description" content="Vous pratiquez le sport arts martiaux en comp&eacute;tition, vous n\'êtes pas assur&eacute; de trouver une assurance emprunteur qui couvre le risque sportif li&eacute; à votre activit&eacute; d\' arts martiaux. Assurez vous avec le courtier assurance-emprunteur.com"/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}