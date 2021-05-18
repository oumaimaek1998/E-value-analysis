import React from "react";
import { withRouter } from "react-router-dom";
import "../HomePage/HomePage.css";

const About = () => (
  <div className="global-page">
    <div className="home-screen">
      <h1 className="title">L'analyse de la valeur</h1>
      <h3>L’histoire de l’analyse de la valeur</h3>
      <p>
        {" "}
        Pendant la deuxième guerre mondiale il y avait un manque de matières
        premières, de main d’œuvre et de composants. Lawrence Miles et Harry
        Erlicher des responsables des achats chez la compagnie General Electric
        aux U.S.A ont cherché des substituts acceptables qui ont par la suite
        réduit les coûts tout en améliorant la qualité du produit. Ce qui a
        débuté accidentellement à cause de la nécessité est devenu un processus
        systématique. Ils ont appelé leur technique «analyse de la valeur ».
        <br /> En 1955, l’Analyse de la Valeur est introduite au Japon et en
        Grande Bretagne. Puis elle apparaît en France en 1958 dans les grandes
        entreprises Et C’est à la fin des années 50 que l’analyse de la valeur
        est intégrée dans les démarches qualité.
      </p>
      <h3>Définition de l’analyse de valeur</h3>
      <p>
        D’après l’association française de normalisation AFNOR L’analyse de la
        valeur est une méthode de compétitivité organisée et créative visant à
        la satisfaction complète du besoin de l’utilisateur d’un produit,
        procédé ou service, par une démarche spécifique de conception ou de
        re-conception à la fois fonctionnelle, économique et pluridisciplinaire.
        La valeur d'un produit est une grandeur qui croit lorsque la
        satisfaction du besoin augmente et/ou que le coût du produit diminue. La
        valeur peut donc être considérée comme le rapport entre l'aptitude aux
        fonctions divisée par le coût des solutions.{" "}
      </p>
      <h3>Les principes</h3>
      <p>
        {" "}
        Cette méthode venue des USA (développée à l’origine par General
        Electric) puis améliorée au Japon est arrivée en Europe vers 1960. La
        technique consiste à analyser toutes les composantes d’un produit pour
        déterminer celles qui peuvent être modifiées, remplacées, standardisées,
        fabriquées ou éliminées (car ces composantes correspondent en fait à des
        fonctions inutiles). Le principe fondamental sur lequel s'appuie cette
        méthode est celui de la remise en cause :
        <ul>
          <li>des finalités du produit ou du service</li>
          <li>des fournisseurs</li>
          <li>des délais</li>
          <li>des supports utilisés</li>
          <li>de l'utilité de certaines tâches</li>
          <li>des canaux de distribution</li>
          <li>des coûts</li>
          <li>...</li>
        </ul>
      </p>
      <h3>Différents types de la valeur </h3>
      <p>
        <h4>Valeur d’utilité :</h4> se définit en comparant les « utilités » de
        chaque objet. Valeur de rareté : la rareté fait privilégier certains
        objets et cette caractéristique a une influence certaine sur le prix.
        <br />
        <h4>Valeur d’échange :</h4> valeur sociale se mesurant par la quantité
        d’argent à donner en contrepartie de l’acquisition de l’objet. Valeur
        d’estime : ensemble de propriétés, d’attraits qui font désirer un
        produit (bijou, luxe).
        <br />
        <h4> Valeur d’usage :</h4> désigne la valeur d'un bien ou d'un service
        pour un consommateur en fonction de l’utilité qu'il en retire par
        rapport à sa personne, à ses besoins et à ses connaissances dans des
        circonstances données. La valeur d’usage est construite par opposition à
        la valeur d’échange. Paradoxe de l’eau et du diamant : « il n'y a rien
        de plus utile que l'eau, mais elle ne peut presque rien acheter ; à
        peine y a-t-il moyen de rien avoir en échange. Un diamant, au contraire,
        n'a presque aucune valeur quant à l'usage, mais on trouvera fréquemment
        à l'échanger contre une très grande quantité d'autres marchandises »
        Recherche sur la nature et les causes de la richesse des nations 1776.{" "}
        <br />
        <h4>Valeur d’un produit :</h4> jugement porté sur le produit sur la base
        des attentes et des motivations de l’utilisateur exprimé par une
        grandeur qui croit lorsque, toutes causes égales par ailleurs, la
        satisfaction du besoin de l’utilisateur augmente et / ou que la dépense
        afférente au produit diminue.
      </p>
    </div>
  </div>
);

export default withRouter(About);
