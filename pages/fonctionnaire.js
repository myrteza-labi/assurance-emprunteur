import Credits from "../credits.json"; import Head from "next/head" ; export default function Fonctionnaire() { let test = Credits.map((credit) => { return credit["data"][16]["contenu"];});return <div><Head> <meta name="description" content="Solution d\'emprunt pour les Fonctionnaires : simulez les crédits immobiliers, tarifez vos prêts personnels, étudiez un rachat de crédit et assurances emprunteur"/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}