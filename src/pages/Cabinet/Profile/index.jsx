import React, {useState, useEffect} from "react";
import { useData } from "../../../hooks/DataContext";

// svg
import { ReactComponent as UserAlt } from "../../../assets/cabinet/user-alt.svg";
import { ReactComponent as PersonalCard } from "../../../assets/cabinet/personal-card.svg";
import { ReactComponent as Letter } from "../../../assets/cabinet/letter.svg";
import { ReactComponent as Building } from "../../../assets/cabinet/building.svg";
import { ReactComponent as PhoneAlt } from "../../../assets/cabinet/phone-alt.svg";
import { ReactComponent as Cog } from "../../../assets/cabinet/cog.svg";
import { ReactComponent as Medal } from "../../../assets/cabinet/medal.svg";

// components
import { UserEditModal, CardLayout } from "../../../components";

const Profile = () => {
  const { data } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

useEffect(() => {
    if (data) {
      setUserData({
        email: data.email,
        fio: data.fio,
        companyName: data.companyName,
        phone: data.phone,
      });
    }
  }, [data]);
  const handleUpdateUserData = (updatedData) => {
    setUserData(updatedData);
  };

  if (!data) {
    return  <div className="loader-container">
    <div className="loader"></div>
  </div>; 
  }
  return (
    <main-page class="body__iner-content ng-star-inserted">
      <div class="body__iner-content">
        <h2 class="body__title title title--h3"> Профиль </h2>
        <div class="body__layout">
          <div class="card">
            <CardLayout IconComponent={PersonalCard} label="ID Пользователя" dataId={data.user_id}/>
            <CardLayout IconComponent={Letter} label="E-mail" dataId={userData?.email}/>
            <CardLayout IconComponent={UserAlt} label="Ф.И.О" dataId={userData?.fio}/>
            <CardLayout IconComponent={Building} label="Компания" dataId={userData?.companyName}/>
            <CardLayout IconComponent={PhoneAlt} label="Номер телефона" dataId={userData?.phone}/>
            <div class="card__footer">
              <button type="button" class="button button--secondary-transparent button--md button--expand" onClick={openModal} >
                <span class="button__icon button__icon--before icon">
                  <Cog class="icon__svg" />
                </span>
                Настройки
              </button>
            </div>
          </div>
        </div>
        <div class="body__layout">
          <div class="card card--center">
            <div class="card__layout">
              <div class="card__image">
                <span class="card__icon icon icon">
                  <Medal class="icon__svg" />
                </span>
              </div>
              <div class="card__details">
                <div class="card__label"> Тариф </div>
                <div class="card__data"> {data.subscription && data.subscription.tariff.name ? data.subscription.tariff.name : null} </div>
              </div>
              <div class="card__actions" id="profil_perepodkluchit">
                <button routerlink="/tariffs" class="button button--primary-outline" tabindex="0">
                  Переподключить тариф
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <UserEditModal closeModal={closeModal} data={userData} onUpdateUserData={handleUpdateUserData}/>}
    </main-page>
  );
};

export default Profile;
