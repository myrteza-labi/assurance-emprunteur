import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Maladiedewolf() { let test = Maladies.map((maladie) => { return maladie["data"][34]["contenu"];});return <div><Head> <meta name="description" content="Vous allez emprunter, vous devez souscrire une assurance de pret alors que vous souffrez de la maladie de Wolf ; Assurance-Emprunteur.com cherche la meilleure solution"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}