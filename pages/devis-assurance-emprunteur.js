import Secondaires from "../secondaire.json";
import Head from "next/head";
import React, { useState, useEffect } from "react";


export default function Devisassuranceemprunteur() {
  useEffect(() => {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  }, []);

  let test = Secondaires.map((secondaire) => {
    return secondaire["data"][0]["contenu"];
  });

  function MonDevis() {
    useEffect(() => {
      (function (param1d, param2s, param3id) {
        let js = param1d.getElementsByTagName(param2s)[0];
        let dpjs = param1d.getElementsByTagName(param2s)[0];
        if (param1d.getElementById(param3id) === true) {
          return;
        }
        js = param1d.createElement(param2s);
        js.iparam3id = param3id;
        js.src = "//simulateur.ascourtage.fr/js/sdkif.js";
        dpjs.parentNode.insertBefore(js, dpjs);
      })(document, "script", "asInit");
      var _AppCfg = { version: "0.1", appId: "l-ass-pret" };
    });
  }

  return (
    <div onLoad={MonDevis()}>
      <Head>
        {" "}
        <meta
          name="description"
          content="Simulez votre devis assurance emprunteur en ligne a l\'aide du comparateur de garanties emprunteur : jeune ou senior, fumeur ou non, profils à risques ..."
        />{" "}
      </Head>
      <div
        className=" pageGenerees pageSecondaire"
        dangerouslySetInnerHTML={{ __html: test }}
      ></div>
    </div>
  );
}
