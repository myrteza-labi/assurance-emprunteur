import Sports from "../sports.json"; import Head from "next/head" ; export default function Stockcar() { let test = Sports.map((sport) => { return sport["data"][65]["contenu"];});return <div><Head> <meta name="description" content="Vous pratiquez le sport stock car, vous n\'êtes pas assuré de trouver une assurance emprunteur qui couvre le risque sportif lié à votre activité de stock car. Assurez vous avec le courtier assurance-emprunteur.com"/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}