import Sports from "../sports.json"; import Head from "next/head" ; export default function Formule1() { let test = Sports.map((sport) => { return sport["data"][26]["contenu"];});return <div><Head> <meta name="description" content="Vous pratiquez le sport Formule 1, vous n\'êtes pas assuré de trouver une assurance emprunteur qui couvre le risque sportif lié à votre activité risque de formule 1. Assurez vous avec le courtier assurance-emprunteur.com"/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}