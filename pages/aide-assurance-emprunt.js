import Divers from "../divers.json"; import Head from "next/head" ; export default function Aideassuranceemprunt() { let test = Divers.map((diver) => { return diver["data"][1]["contenu"];});return <div><Head> <meta name="description" content="Quelle assurance pour mon emprunt immobilier ? si vous avez besoin d\'aide, le courtier assurance-emprunteur.com est là pour vous aider"/> </Head><div className=" pageGenerees pageDiverse" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}