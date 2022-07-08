import MainTitleH1 from "../components/MainTitleH1";
import H2Model1 from "../components/h2Model1";
import SimpleText from "../components/SimpleText";
import ButtonModel1 from "../components/ButtonModel1";
import DropDownFaq from "../components/DropDownFaq";

export default function Page2() {
  return (
    <div className="Pages2 ">
      <div className="mainImageHeader mainImageHeaderPage2"></div>
      <MainTitleH1 title={"VOICI UN LONG TITRE"} />
      <div className="Page2MainContent">
        <H2Model1 className="h2Model1Red " title="Voici mon titre h2. " />
        <SimpleText>
          Voici mon paragraphe nomme SimpleTextVoici mon paragraphe nomme
          SimpleText Voici mon paragraphe nomme SimpleText Voici mon paragraphe
          nomme SimpleText Voici mon paragraphe nomme SimpleText Voici mon
          paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleTextVoici
          mon paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleText{" "}
        </SimpleText> 
        <ButtonModel1 title={"Voici mon button"} />
        <DropDownFaq
          subject1={"Mon sujet 1"}
          text1={
            "Voici mon text numéro 1 qui me sert d'exemple. mon paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleTextmon paragraphe nomme SimpleTextVoici "
          }

          subject2={"Mon sujet 1"}
          text2={
            "Voici mon text numéro 1 qui me sert d'exemple. mon paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleTextmon paragraphe nomme SimpleTextVoici "
          }

          subject3={"Mon sujet 1"}
          text3={
            "Voici mon text numéro 1 qui me sert d'exemple. mon paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleTextmon paragraphe nomme SimpleTextVoici "
          }

          subject4={"Mon sujet 1"}
          text4={
            "Voici mon text numéro 1 qui me sert d'exemple. mon paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleTextmon paragraphe nomme SimpleTextVoici "
          }
        />
        <H2Model1 className="h2Model1Blue" title="Quoi de neuf"/>
        <SimpleText>
          Voici mon paragraphe nomme SimpleTextVoici mon paragraphe nomme
          SimpleText Voici mon paragraphe nomme SimpleText Voici mon paragraphe
          nomme SimpleText Voici mon paragraphe nomme SimpleText Voici mon
          paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleTextVoici
          mon paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleText{" "}
        </SimpleText>
        <H2Model1 className="h2Model1Blue h2Model1Bold" title="Un titre gras"/>
        <SimpleText>
          paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleTextVoici
          mon paragraphe nomme SimpleTextVoici mon paragraphe nomme SimpleText{" "}
        </SimpleText>
        <ButtonModel1 className="ButtonModel1Red " title={"MON BOUTON"} />

      </div>
    </div>
  );
}
