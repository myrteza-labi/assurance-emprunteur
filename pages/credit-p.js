import Specials from "../special.json"; import Head from "next/head" ; export default function Creditp() { let test = Specials.map((special) => { return special["data"][6]["description"];});return <div><Head> <meta name="description" content="la mission du courtier assurance-emprunteur.com est de faire baisser significativement le coût du credit aux emprunteurs en France et en Union Européenne "/> </Head><div className=" pageGenerees specialPages" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}