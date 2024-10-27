import React, {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import {Breadcrumb, OrderTariff} from "../../components";
import { TariffsModile, TariffsDesktop } from "./TariffsComponents";
import { getTariff } from "../../api/Tariff/getTariff";
import { useData } from "../../hooks/DataContext";
const Tariffs = () => {
 const [datatariffs, setData] = useState([])
 const [showModal, setShowModal] = useState(false);
 const [selectedTariff, setSelectedTariff] = useState(null);
 const { data } = useData();
 const openModal = (tariffId, tariffName) => {

  if (!data || Object.keys(data).length === 0) {
    toast.error("Пожалуйста, авторизуйтесь, чтобы заказать тариф.");
    return;
}

  setSelectedTariff({ id: tariffId, name: tariffName });
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
  setSelectedTariff(null);
};


 const [isMobile, setIsMobile] = useState(window.innerWidth <= 796);
  useEffect(() => {
    getTariff({setData});

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 796);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
}, []); 


  return (
      <tariffs class="ng-star-inserted">
        <main class="ng-star-inserted">
          <div class="content ng-star-inserted">
            <div class="content__block content__block--head content__block--theme-secondary">
              <div class="container container--lg">
                <Breadcrumb />
                <h1 class="visually-hidden"> Тарифы </h1>
                <section class="content__layout">
                  <h2 class="content__title"> Тарифы </h2>
                  {!isMobile &&<TariffsDesktop tariffs={datatariffs} openModal={openModal}/>}
                </section>
              </div>
       
              {isMobile &&<TariffsModile tariffs={datatariffs} openModal={openModal}/>}
            </div>
          </div>
        </main>
        {showModal && <OrderTariff closeModal={closeModal} tariffId={selectedTariff.id} tariffName={selectedTariff.name}/>}
      </tariffs>
  );
};

export default Tariffs;


