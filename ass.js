




 
   
 




const fs = require("fs");



let myData = require('./compagnies.json');
let myDataLenght = Object.keys(myData[0].data).length; 
let nomAssurance = myData[0].data[0].nom_court; 
let nomAssuranceToString = nomAssurance.toString()

console.log(Object.keys(myData[0].data).length)
console.log(myData[0].data[1].nom)
console.log(myData[0].data[1].mt_description)



for (var i = 0; i < myDataLenght; i++) {

  let nomAssurance = myData[0].data[i].nom_court; 
  const description = myData[0].data[i].mt_description; 
  const descriptionToString = description.toString(); 
  const iToString = i.toString(); 


/*
  const raw =
  'import Compagnies from "../compagnies.json"; export default function Home() { let test = Compagnies.map((compagnie) => { return compagnie["data"]['+iToString+']["contenu"];});return <div className="compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div>;}';
*/
  
  const compagnieAssurance =
  'import Compagnies from "../compagnies.json"; import Head from "next/head" ; export default function Home() { let test = Compagnies.map((compagnie) => { return compagnie["data"]['+iToString+']["contenu"];});return <div><Head> <meta name="description" content="'+descriptionToString+'"/> </Head><div className="compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div></div>;}';


  fs.writeFile('pages/'+ nomAssurance +'.js', compagnieAssurance, function (err) {
    console.log("data saved");
  });
} 




/*





*/
  



  



