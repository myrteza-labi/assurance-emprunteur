import Sports from "../sports.json"; import Head from "next/head" ; export default function Courseshippiques() { let test = Sports.map((sport) => { return sport["data"][16]["contenu"];});return <div><Head> <meta name="description" content="Vous pratiquez le sport courses hippiques, vous n\'êtes pas assur&eacute; de trouver une assurance emprunteur qui couvre le risque sportif li&eacute; à votre activit&eacute; de course hippique. Assurez vous avec le courtier assurance-emprunteur.com"/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}