import Divers from "../divers.json"; import Head from "next/head" ; export default function Plandesite() { let test = Divers.map((diver) => { return diver["data"][2]["contenu"];});return <div><Head> <meta name="description" content="Sitemap du site internet du courtier assurance emprunteur : le spécialiste de la garantie emprunteur déléguée"/> </Head><div className=" pageGenerees pageDiverse" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}