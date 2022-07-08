




 
   
 




const fs = require("fs");



let myData = require('./autres-banques.json');
let myDataLenght = Object.keys(myData[0].data).length; 




function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}


for (var i = 0; i < myDataLenght; i++) {

  let nomAssurance = myData[0].data[i].nom_court; 
  const description = myData[0].data[i].mt_description; 
  const descriptionToString = description.toString(); 
  const iToString = i.toString(); 

  let nomComposantSansTrait = nomAssurance.replace(/£|\$|€|-|,|\./g,'');
  let nomComposantFinal = capitalizeFirstLetter(nomComposantSansTrait); 


/*
  const raw =
  'import Compagnies from "../compagnies.json"; export default function Home() { let test = Compagnies.map((compagnie) => { return compagnie["data"]['+iToString+']["contenu"];});return <div className="compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div>;}';
*/
  
  const compagnieAssurance =
  'import Banques2 from "../autres-banques.json"; import Head from "next/head" ; export default function '+nomComposantFinal +'() { let test = Banques2.map((banque2) => { return banque2["data"]['+iToString+']["contenu"];});return <div><Head> <meta name="description" content="'+descriptionToString+'"/> </Head><div className=" pageGenerees pageAutreBanque" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}';


  fs.writeFile('pages/'+ nomAssurance +'2.js', compagnieAssurance, function (err) {
    console.log("data saved");
  });
} 








  



