




 
   
 




const fs = require("fs");



let myData = require('./special.json');
let myDataLenght = Object.keys(myData[0].data).length; 
let nomAssurance = myData[0].data[0].url; 
let nomAssuranceToString = nomAssurance.toString()

/*
console.log(Object.keys(myData[0].data).length)
console.log(myData[0].data[1].nom)
console.log(myData[0].data[1].mt_description)

*/
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

for (var i = 0; i < myDataLenght; i++) {

  let nomAssurance = myData[0].data[i].url; 
  const description = myData[0].data[i].mt_description; 
  const descriptionToString = description.toString(); 
  const iToString = i.toString(); 
  let nomComposant  = nomAssurance.toString(); 
  let nomComposantSansTrait = nomComposant.replace(/£|\$|€|-|,|\./g,'');

  let nomComposantFinal = capitalizeFirstLetter(nomComposantSansTrait); 


/*
  const raw =
  'import Compagnies from "../compagnies.json"; export default function Home() { let test = Compagnies.map((compagnie) => { return compagnie["data"]['+iToString+']["contenu"];});return <div className="compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div>;}';
*/
  
  const compagnieAssurance =
  'import Specials from "../special.json"; import Head from "next/head" ; export default function '+nomComposantFinal +'() { let test = Specials.map((special) => { return special["data"]['+iToString+']["description"];});return <div><Head> <meta name="description" content="'+descriptionToString+'"/> </Head><div className="specialPages" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}';


  fs.writeFile('pages/'+ nomAssurance +'.js', compagnieAssurance, function (err) {
    console.log("data saved");
  });
} 








  



