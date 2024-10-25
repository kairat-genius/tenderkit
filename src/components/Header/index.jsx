import "./Header.css";
import React, { useState} from "react"
import { useData } from "../../hooks/DataContext";

// components header
import {TopDesktop, HeaderMobile, HeaderDesktop} from "./HeaderComponents";

// Login / Register
import {Login, Register} from "../index"

const Header = () => {
  const {data} = useData();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const handleBackgroundClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };
  const switchToRegister = () => {
    setModalType("register");
  };


  return (
    <header class="layout__header">
        <TopDesktop/>
        <HeaderDesktop openModal={openModal} data={data}/>
        <HeaderMobile openModal={openModal} data={data}/>


        {showModal && (
        <div onClick={handleBackgroundClick}>
          {modalType === "login" ? (
            <Login
              onClose={closeModal}
              onSwitchToRegister={switchToRegister}
            />
          ) : (
            <Register
              onClose={closeModal}
            />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
