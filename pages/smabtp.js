import Compagnies from "../compagnies.json"; import Head from "next/head" ; export default function Smabtp() { let test = Compagnies.map((compagnie) => { return compagnie["data"][45]["contenu"];});return <div><Head> <meta name="description" content="Comparez les contrats d\'assurance emprunteur SMABTP avec nos offres de sp&eacute;cialistes assurance emprunteur. Trouvez le meilleur offre du march&eacute;."/> </Head><div className=" pageGenerees compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}