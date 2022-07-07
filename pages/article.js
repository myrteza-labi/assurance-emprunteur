import Specials from "../special.json";

export default function Home() {



  let test = Specials.map((special) => {
    return special["data"][1]["description"];
  });

  let lenghtTest = Specials.lenght



  return <div dangerouslySetInnerHTML={{ __html: test }}></div>;
}
