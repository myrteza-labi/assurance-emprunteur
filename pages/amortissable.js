import Credits from "../credits.json"; import Head from "next/head" ; export default function Amortissable() { let test = Credits.map((credit) => { return credit["data"][4]["contenu"];});return <div><Head> <meta name="description" content="Réalisez un tarif simulez votre emprunt amortissable en fonction de votre profil emprunteur et des différentes caractéristiques de votre emprunt amortissable en ligne."/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}