import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Epilepsie() { let test = Maladies.map((maladie) => { return maladie["data"][20]["contenu"];});return <div><Head> <meta name="description" content="Pour emprunter afin de financer l\'achat d\'un nouveau logement même si vous souffrez d\'épilepsie ; faites appel au courtier assurance-emprunteur.com"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}