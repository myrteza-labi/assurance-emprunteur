import Credits from "../credits.json"; import Head from "next/head" ; export default function Investissement() { let test = Credits.map((credit) => { return credit["data"][23]["contenu"];});return <div><Head> <meta name="description" content="Vous voyez le potentiel dans un projet dans lequel vous souhaitez investir. C\'est possible : simulez un emprunt investissement et optez pour l\'offre qui vous convient."/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}