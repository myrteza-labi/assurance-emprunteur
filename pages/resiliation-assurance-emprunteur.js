import Secondaires from "../secondaire.json"; import Head from "next/head" ; export default function Resiliationassuranceemprunteur() { let test = Secondaires.map((secondaire) => { return secondaire["data"][6]["contenu"];});return <div><Head> <meta name="description" content="Annuler son assurance emprunteur ? Suivez les conseils du courtier et transmettez en AR les documents afin de faire valoir vos droits de consommateurs et ainsi resilier l\'assurance emprunteur pour payer moins cher"/> </Head><div className=" pageGenerees pageSecondaire" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}