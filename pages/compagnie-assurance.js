import MainTitleH1 from "../components/MainTitleH1";
import H2Model1 from "../components/h2Model1";
import SimpleText from "../components/SimpleText";
import ButtonModel1 from "../components/ButtonModel1";
import DropDownFaq from "../components/DropDownFaq";
import Link from "next/link";

export default function Page2() {
  return (
    <div className="Pages2 ">
      <div className="mainImageHeader mainImageHeaderPage2"></div>
      <MainTitleH1 title={"Compagnies d'assurances emprunteur"} />
      <div className="Page2MainContent">
        <H2Model1 className="h2Model1Red " title="Ce qu'il faut savoir " />
        <SimpleText>
          Démarcher seul pour comparer les offres d'assurance emprunteur de
          différentes compagnies d'assurances peut vous demander beaucoup de
          temps, de patience et de certaines connaissances dans le domaine de
          l'assurance emprunteur.
        </SimpleText>
        <Link href="/devis-assurance-emprunteur">
          <a>
            <ButtonModel1 title={"Mon devis gratuit"} />
          </a>
        </Link>

        <DropDownFaq
          subject1={"Pourquoi comparer ?"}
          text1={
            "Démarcher seul pour comparer les offres d'assurance emprunteur de différentes compagnies d'assurances peut vous demander beaucoup de temps, de patience et de certaines connaissances dans le domaine de l'assurance emprunteur. Il est donc judicieux que vous fassiez appel aux services d'un courtier spécialisé en assurance emprunteur pour souscrire le meilleur contrat possible. "
          }
          subject2={"Qu'est-ce qu'un courtier ?"}
          text2={
            "Fort de son expérience en négociation d'offres financières et bénéficiant de rapports privilégiés avec les établissements de prêt et les compagnies d'assurance, le courtier est en mesure de négocier pour vous les meilleures conditions d'assurance emprunteur au tarif le plus avantageux. Grâce à lui, vous bénéficierez à moindre coût du contrat qui répond le mieux à vos besoins individuels. "
          }
          subject3={"Les meilleurs assurances"}
          text3={
            "Grâce au comparateur assurance emprunteur, outil gratuit et sans engagement mis à votre disposition, vous pourrez comparer en peu de temps les offres des plus grandes compagnies d'assurance et trouver celle qui sera la plus adaptée à votre situation et la moins chère du marché. "
          }
          subject4={"Soucrire un contrat"}
          text4={
            "En confiant la recherche et négociation de votre assurance de pret au courtier Assurance-Emprunteur.com, vous pourrez choisir parmi les meilleures propositions d'assurances des plus importantes compagnies d'assurance et bénéficierez de conseils avisés. Obtenir le meilleur contrat d'assurance emprunteur, c'est économiser plusieurs milliers d'euros sur le coût de votre prêt immo ! "
          }
          subject5={"Comment nous contacter"}
          text5={
            "Vous pouvez nous contacter en utilisant notre numéro de téléphone, ou en nous contactant par e-mail. Nos experts en assurance emprunteur  vous accompagne dans votre projet d'assurance prêt.  quelque soit votre profil, une assurance est adapté à vous. Il suffit de trouver ce qui correspond à vos besoins et réponds à ceci au meilleur prix. N'hésitez plus et prenez contact avec l'un de nos conseillers"
          }
        />
        <H2Model1 className="h2Model1Blue" title="Les compagnies" />
        <SimpleText>
          Grâce au comparateur assurance emprunteur, outil gratuit et sans
          engagement mis à votre disposition, vous pourrez comparer en peu de
          temps les offres des plus grandes compagnies d'assurance et trouver
          celle qui sera la plus adaptée à votre situation et la moins chère du
          marché. Faites jouer la concurrence entre les plus grandes compagnies
          d'assurance emprunteur.
        </SimpleText>
        <H2Model1
          className="h2Model1Blue h2Model1Bold"
          title="Un courtier à votre écoute"
        />
        <SimpleText>
          Toutes les informations assurance emprunteur immobilier pratiques et
          les conseils pour bien choisir vos garanties et ainsi assurer au mieux
          vos biens et vos proches. Jusqu'à la souscription de votre contrat nos
          conseillers sont à votre disposition pour réagir efficacement en cas
          de problème pour la mise en place de la délégation d'assurance.
        </SimpleText>

        <Link href="/devis-assurance-emprunteur">
          <a>
            <ButtonModel1
              className="ButtonModel1Red "
              title={"Obtenir un devis"}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
