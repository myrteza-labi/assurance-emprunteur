import Secondaires from "../secondaire.json"; import Head from "next/head" ; export default function Calculassuranceemprunteur() { let test = Secondaires.map((secondaire) => { return secondaire["data"][13]["contenu"];});return <div><Head> <meta name="description" content="Calculez le tarif de votre &#9733; Assurance Emprunteur &#9733; en ligne et souscrivez imm&eacute;diatement au &#9733; 04 788 088 29 &#9733; ! Assurance emprunteur à partir de 0,10% ! Comparatif des assurances d\'Emprunt."/> </Head><div className=" pageGenerees pageSecondaire" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}