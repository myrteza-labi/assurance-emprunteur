import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Souspoids() { let test = Maladies.map((maladie) => { return maladie["data"][40]["contenu"];});return <div><Head> <meta name="description" content="Vous souffrez de sous-poids et cela cause un refus d\'assurance prêt de la part de votre organisme de credit ; faites appel au courtier assurance-emprunteur.com"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}