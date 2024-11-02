import React, {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import {Breadcrumb, OrderTariff} from "../../components";
import { TariffsModile, TariffsDesktop } from "./TariffsComponents";
import { getTariff } from "../../api/Tariff/getTariff";
import { useData } from "../../hooks/DataContext";
import textData from "../../json/tariffs.json"; 
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
    getTariff({setData, data});

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 796);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
}, []); 


  return (
        <main className="ng-star-inserted">
          <div className="content ng-star-inserted">
            <div className="content__block content__block--head content__block--theme-secondary">
              <div className="container container--lg">
                <Breadcrumb />
                <h1 className="visually-hidden"> Тарифы </h1>
                <section className="content__layout">
                  <h2 className="content__title"> Тарифы </h2>
                  {!isMobile &&<TariffsDesktop tariffs={datatariffs} openModal={openModal} textData={textData}/>}
                </section>
              </div>
       
              {isMobile &&<TariffsModile tariffs={datatariffs} openModal={openModal} textData={textData}/>}
            </div>
          </div>
          {showModal && <OrderTariff closeModal={closeModal} tariffId={selectedTariff.id} tariffName={selectedTariff.name}/>}
        </main>
  );
};

export default Tariffs;


