import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Depression() { let test = Maladies.map((maladie) => { return maladie["data"][29]["contenu"];});return <div><Head> <meta name="description" content="La dépression peut entraîner de long arrêt de travail, en cas d\'assurance de prêt immobilier il faut bien évidemment prevoir la prise en charge de ce risque aggravé de santé"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}