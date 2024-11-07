import React, { useState, useEffect} from "react"
import { useData } from "../../hooks/DataContext";

// components header
import {TopDesktop, HeaderMobile, HeaderDesktop} from "./HeaderComponents";

// Login / Register
import Register from "../LoginRegister/Register";
import Login from "../LoginRegister/Login";

const Header = () => {
  const {data} = useData();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <header className="layout__header">
        {isMobile ? (
        <HeaderMobile openModal={openModal} data={data} />
      ) : (
        <>
          <TopDesktop openModal={openModal} data={data} />
          <HeaderDesktop />
        </>
      )}


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
