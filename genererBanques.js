




 
   
 




const fs = require("fs");



let myData = require('./banques.json');
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
  'import Banques from "../banques.json"; import Head from "next/head" ; export default function '+nomComposantFinal +'() { let test = Banques.map((banque) => { return banque["data"]['+iToString+']["contenu"];});return <div><Head> <meta name="description" content="'+descriptionToString+'"/> </Head><div className=" pageGenerees pagesBanque" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}';


  fs.writeFile('pages/'+ nomAssurance +'.js', compagnieAssurance, function (err) {
    console.log("data saved");
  });
} 








  



