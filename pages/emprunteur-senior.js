import Secondaires from "../secondaire.json"; import Head from "next/head" ; export default function Emprunteursenior() { let test = Secondaires.map((secondaire) => { return secondaire["data"][18]["contenu"];});return <div><Head> <meta name="description" content="assurance emprunteur senior - Le courtier assurance-emprunteur.com trouve des solutions pour les emprunteurs seniors. Consultez les offres sp&eacute;ciales pour les emprunteurs senior"/> </Head><div className=" pageGenerees pageSecondaire" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}