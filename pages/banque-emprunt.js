import Sports from "../sports.json"; import Head from "next/head" ; export default function Banqueemprunt() { let test = Sports.map((sport) => { return sport["data"][2]["contenu"];});return <div><Head> <meta name="description" content="Les organismes de cr&eacute;dit ou les banques pr&eacute;sentent diff&eacute;rentes solutions pour r&eacute;aliser un emprunt, un cr&eacute;dit adapt&eacute;es à l\'emprunteur"/> </Head><div className=" pageGenerees pageSport" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}