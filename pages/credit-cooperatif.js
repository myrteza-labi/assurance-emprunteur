import Banques from "../banques.json"; import Head from "next/head" ; export default function Creditcooperatif() { let test = Banques.map((banque) => { return banque["data"][42]["contenu"];});return <div><Head> <meta name="description" content="Pour emprunter vous devez comparer les diff&eacute;rentes banques, si vous êtes à la Cr&eacute;dit coop&eacute;ratif, passer par un courtier en ligne sp&eacute;cialis&eacute; en credit qui pourra comparer l'offre d'emprunt de Cr&eacute;dit coop&eacute;ratif avec les autres organismes d'emprunts"/> </Head><div className=" pageGenerees pagesBanque" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}