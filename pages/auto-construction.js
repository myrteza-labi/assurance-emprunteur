import Credits from "../credits.json"; import Head from "next/head" ; export default function Autoconstruction() { let test = Credits.map((credit) => { return credit["data"][6]["contenu"];});return <div><Head> <meta name="description" content="Simulation d\'emprunt - Le Tarificateur permet de simuler votre 
Emprunt auto construction en fonction de votre profil emprunteur et des différentes caractéristiques de votre Emprunt auto construction en ligne"/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}