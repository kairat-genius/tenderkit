import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// svg
import { ReactComponent as PhoneOffice } from "../../assets/svg/social/phone-office.svg";
import { ReactComponent as Pin } from "../../assets/svg/icon/pin.svg";
import { ReactComponent as Whatsapp } from "../../assets/svg/social/whatsup.svg";

import { ReactComponent as Letter } from "../../assets/cabinet/letter.svg";
import { ReactComponent as PhoneAlt } from "../../assets/cabinet/phone-alt.svg";

// components Contacts
import Breadcrumb from "../../components/Breadcrumb";
import MetaTags from "../../components/MetaTags";
import ContactLink from "./ContactLink";
import "leaflet/dist/leaflet.css";

const Contacts = () => {
  const [center] = useState({ lat: 51.18308, lng: 71.423 });
  const ZOOM_LEVEL = 16;

  return (
    <main className="ng-star-inserted">
        <MetaTags page="contacts"/>
      <div className="layout__container">
        <div className="body body--contacts">
          <div className="body__content">
            <Breadcrumb />
            <h1 className="body__heading"> Контакты </h1>
            <div className="body__container">
              <div className="body__section">
                <ContactLink
                  href="tel:+77057638953"
                  icon={PhoneOffice}
                  text="+7 (705)-763-89-53"
                />
                <ContactLink
                  href="tel:+77057638953"
                  icon={PhoneAlt}
                  title="Номер телефона"
                  text="+7 (705)-763-89-53"
                />
                <ContactLink
                  href="tel:+77057638953"
                  icon={Whatsapp}
                  title="WhatsApp и Telegram"
                  text="+7 (705)-763-89-53"
                />
                <ContactLink
                  href="mailto:ayapovabl@gmail.com"
                  icon={Letter}
                  title="Email"
                  text="ayapovabl@gmail.com"
                />
                <ContactLink
                  href="tel:+77057638953"
                  icon={Pin}
                  title="Адрес"
                  text="Республика Казахстан, город Астана проспект Республики 58"
                />
              </div>
              <div className="body__section">
                <MapContainer
                  center={center}
                  zoom={ZOOM_LEVEL}
                  className="body__map map"
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={center}>
                    <Popup>
                      Республика Казахстан, город Астана проспект Республики 58
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
