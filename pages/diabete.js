import Maladies from "../maladies.json"; import Head from "next/head" ; export default function Diabete() { let test = Maladies.map((maladie) => { return maladie["data"][43]["contenu"];});return <div><Head> <meta name="description" content="Lors d\'un emprunt immobilier, si l\'emprunteur souffre du diabète, il est préférable de faire appel à un courtier expert en assurance de pret"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}