import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
// svg
import { ReactComponent as IconLink } from "../../assets/svg/pointer/link/link.svg";
import { ReactComponent as IconShare } from "../../assets/svg/pointer/link/share.svg";
import { ReactComponent as WhatsappLogo } from "../../assets/svg/social/whatsapp-logo.svg";
import { ReactComponent as TelegramLogo } from "../../assets/svg/social/telegram-logo.svg";

const Share = ({url}) => {
    const [isSharerOpen, setIsShareOpen] = useState(false);

    const toggleShare = (e) => {
        setIsShareOpen(prevState => !prevState);
      };
  
      const copyLinkToClipboard = () => {
          navigator.clipboard.writeText(`https://tenderkit.kz/result/${url}`);
      };
  return (
    <div ClassName="button-group__layout">
        <OutsideClickHandler onOutsideClick={() => setIsShareOpen(false)} >
      <div clickoutside="" ClassName={`dropdown dropdown--folders ${isSharerOpen ? "dropdown--active" : "" }`}>
        <button
          ClassName={`button button--action button--sm ${isSharerOpen ? "button--primary-transparent" : "" }`}
          onClick={toggleShare}
        >
          <span ClassName="ng-star-inserted"> Поделиться </span>
          <span ClassName="button__icon button__icon--after icon">
            <IconShare ClassName="icon__svg" />
          </span>
        </button>
        {isSharerOpen && (
            <div ClassName="dropdown__body">
              <ul ClassName="option option--folders">
                <li ClassName="option__layout">
                  <a
                    target="_blank"
                    ClassName="option__button"
                    href={`https://api.whatsapp.com/send?text=https://tenderkit.kz/result/${url}`}
                  >
                    <span ClassName="button__icon button__icon--before icon">
                      <WhatsappLogo ClassName="icon__svg" />
                    </span>
                    WhatsApp
                  </a>
                </li>
                <li ClassName="option__layout">
                  <a
                    target="_blank"
                    ClassName="option__button"
                    href={`https://t.me/share/url?url=https://tenderkit.kz/result/${url}`}
                  >
                    <span ClassName="button__icon button__icon--before icon">
                      <TelegramLogo ClassName="icon__svg" />
                    </span>
                    Telegram
                  </a>
                </li>
                <li ClassName="option__layout">
                  <button ClassName="option__button" onClick={() => {
                      copyLinkToClipboard();
                      toggleShare();
                    }}>
                    <span ClassName="button__icon button__icon--before icon">
                      <IconLink ClassName="icon__svg" />
                    </span>
                    Ссылка
                  </button>
                </li>
              </ul>
            </div>

        )}
      </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Share;
