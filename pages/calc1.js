import Compagnies from "../compagnies.json";
export default function Home() {
  let test = Compagnies.map((compagnie) => {
    return compagnie["data"][0]["contenu"];
  });



  
  return (
    <div
      className="compagnieAssurance"
      dangerouslySetInnerHTML={{ __html: test }}
    ></div>
  );
}
