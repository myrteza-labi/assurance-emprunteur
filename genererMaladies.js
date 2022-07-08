




 
   
 




const fs = require("fs");



let myData = require('./maladies.json');
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

  
  const compagnieAssurance =
  'import Maladies from "../maladies.json"; import Head from "next/head" ; export default function '+nomComposantFinal +'() { let test = Maladies.map((maladie) => { return maladie["data"]['+iToString+']["contenu"];});return <div><Head> <meta name="description" content="'+descriptionToString+'"/> </Head><div className=" pageGenerees pagesMaladie" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}';


  fs.writeFile('pages/'+ nomAssurance +'.js', compagnieAssurance, function (err) {
    console.log("data saved");
  });
} 








  



