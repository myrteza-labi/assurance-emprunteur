




 
   
 




const fs = require("fs");



let myData = require('./compagnies.json');
let myDataLenght = Object.keys(myData[0].data).length; 
let nomAssurance = myData[0].data[0].nom_court; 
let nomAssuranceToString = nomAssurance.toString()

console.log(Object.keys(myData[0].data).length)
console.log(myData[0].data[1].nom)



for (var i = 0; i < myDataLenght; i++) {

  let nomAssurance = myData[0].data[i].nom_court; 
  const iToString = i.toString(); 
  const raw =
  'import Compagnies from "../compagnies.json"; export default function Home() { let test = Compagnies.map((compagnie) => { return compagnie["data"]['+iToString+']["contenu"];});return <div className="compagnieAssurance" dangerouslySetInnerHTML={{ __html: test }}></div>;}';
  fs.writeFile('pages/'+ nomAssurance +'.js', raw, function (err) {
    console.log("data saved");
  });
} 





  



  



