import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Maladiedehodgkin() { let test = Maladies.map((maladie) => { return maladie["data"][24]["contenu"];});return <div><Head> <meta name="description" content="Si vous envisagez de réaliser un credit pour acheter votre logement et que vous souffrez de la maladie de Hodgkin : Assurance-emprunteur.com  a peut être la solution
"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}