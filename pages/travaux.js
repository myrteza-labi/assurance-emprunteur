import Credits from "../credits.json"; import Head from "next/head" ; export default function Travaux() { let test = Credits.map((credit) => { return credit["data"][33]["contenu"];});return <div><Head> <meta name="description" content="Simulation emprunt à partir du Tarificateur pour simuler votre 
Emprunt travaux en ligne moins cher"/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}