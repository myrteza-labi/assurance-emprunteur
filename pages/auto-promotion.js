import Credits from "../credits.json"; import Head from "next/head" ; export default function Autopromotion() { let test = Credits.map((credit) => { return credit["data"][7]["contenu"];});return <div><Head> <meta name="description" content="Le Tarificateur permet de simuler votre Emprunt auto-promotion en fonction du profil emprunteur et de différentes caractéristiques"/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}