import Credits from "../credits.json"; import Head from "next/head" ; export default function Auto() { let test = Credits.map((credit) => { return credit["data"][37]["contenu"];});return <div><Head> <meta name="description" content="Obtenir le meilleur taux effectif global pour un emprunt auto et ainsi négocier le meilleur crédit auto possible pour l\'achat d\'un véhicule neuf ou d\'occasion"/> </Head><div className=" pageGenerees pageCredit" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}