import Sports from "../sports.json"; import Head from "next/head" ; export default function Escalade() { let test = Sports.map((sport) => { return sport["data"][23]["contenu"];});return <div><Head> <meta name="description" content="Vous pratiquez le sport escalade, vous n\'êtes pas assuré de trouver une assurance emprunteur qui couvre le risque sportif lié à votre activité escalade. Assurez vous avec le courtier assurance-emprunteur.com"/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}