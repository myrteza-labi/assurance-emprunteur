import Credits from "../credits.json"; import Head from "next/head" ; export default function Immobilier() { let test = Credits.map((credit) => { return credit["data"][1]["contenu"];});return <div><Head> <meta name="description" content="Emprunt immobilier : votre taux d\'emprunt immobilier le moins cher avec le specialiste de l\'emprunt immobilier"/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}