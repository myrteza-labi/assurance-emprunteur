import Sports from "../sports.json"; import Head from "next/head" ; export default function Pechesousmarine() { let test = Sports.map((sport) => { return sport["data"][45]["contenu"];});return <div><Head> <meta name="description" content="Vous pratiquez le sport pêche sous marine, vous n\'êtes pas assuré de trouver une assurance emprunteur qui couvre le risque sportif lié à votre activité de pêche sous marine. "/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}