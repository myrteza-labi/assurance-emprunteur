import Credits from "../credits.json"; import Head from "next/head" ; export default function Codal() { let test = Credits.map((credit) => { return credit["data"][9]["contenu"];});return <div><Head> <meta name="description" content="Tarificateur pour simuler un Emprunt codal selon le profil emprunteur et différentes caractéristiques du pret"/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}