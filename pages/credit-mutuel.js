import Banques from "../banques.json"; import Head from "next/head" ; export default function Creditmutuel() { let test = Banques.map((banque) => { return banque["data"][4]["contenu"];});return <div><Head> <meta name="description" content="Credit mutuel assurance emprunteur bancaire moins chere : -70% sur votre assurance emprunteur bancaire cr&eacute;dit mutuel, comparer les offre du sp&eacute;cialiste de l\'assurance emprunteur gratuitement."/> </Head><div className=" pageGenerees pagesBanque" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}