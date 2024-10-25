import React, {useEffect, useState} from "react";

import Breadcrumb from "../../components/Breadcrumb";
import { TariffsModile, TariffsDesktop } from "./TariffsComponents";
import { getTariff } from "../../api/Tariff/getTariff";



const Tariffs = () => {
 const [data, setData] = useState([])
  useEffect(() => {
    getTariff({setData});
}, []); 

  return (
      <tariffs class="ng-star-inserted">
        <tariffs-main class="ng-star-inserted">
          <div class="content ng-star-inserted">
            <div class="content__block content__block--head content__block--theme-secondary">
              <div class="container container--lg">
                <Breadcrumb />
                <h1 class="visually-hidden"> Тарифы </h1>
                <section class="content__layout">
                  <h2 class="content__title"> Тарифы </h2>
                  <TariffsDesktop tariffs={data}/>
                </section>
              </div>
              {/* проверка на мобильный */}
              {/* <TariffsModile /> */}
            </div>
          </div>
        </tariffs-main>
      </tariffs>
  );
};

export default Tariffs;


