import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Anorexie() { let test = Maladies.map((maladie) => { return maladie["data"][45]["contenu"];});return <div><Head> <meta name="description" content="Votre assurance emprunteur négociée par un professionnel indépendant spécialiste en garantie pour emprunteur avec un risque de santé comme l\'anorexie"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}