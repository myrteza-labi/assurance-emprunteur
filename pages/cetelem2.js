import Banques2 from "../autres-banques.json"; import Head from "next/head" ; export default function Cetelem() { let test = Banques2.map((banque2) => { return banque2["data"][3]["contenu"];});return <div><Head> <meta name="description" content="Rachetez vos emprunts avec cetelem ou un organisme de pret diff&eacute;rent vous autorise à changer l\'assurance de l\'emprunt, Devis en ligne rachat emprunt."/> </Head><div className=" pageGenerees pageAutreBanque" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}