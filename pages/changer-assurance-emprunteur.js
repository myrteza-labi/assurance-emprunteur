import Secondaires from "../secondaire.json"; import Head from "next/head" ; export default function Changerassuranceemprunteur() { let test = Secondaires.map((secondaire) => { return secondaire["data"][4]["contenu"];});return <div><Head> <meta name="description" content="changer l\'assurance emprunteur immobilier en cours afin d\'économiser jusqu\'à 70% par rapport à l\'offre emprunteur bancaire. Vous pouvez résilier votre assurance emprunteur en cours selon les conditions générales du contrat assurance a date anniversaire"/> </Head><div className=" pageGenerees pageSecondaire" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}