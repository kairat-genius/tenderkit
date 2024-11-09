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
    <div className="button-group__layout">
        <OutsideClickHandler onOutsideClick={() => setIsShareOpen(false)} >
      <div clickoutside="" className={`dropdown dropdown--folders ${isSharerOpen ? "dropdown--active" : "" }`}>
        <button
          className={`button button--action button--sm ${isSharerOpen ? "button--primary-transparent" : "" }`}
          onClick={toggleShare}
        >
          <span className="ng-star-inserted"> Поделиться </span>
          <span className="button__icon button__icon--after icon">
            <IconShare className="icon__svg" />
          </span>
        </button>
        {isSharerOpen && (
            <div className="dropdown__body">
              <ul className="option option--folders">
                <li className="option__layout">
                  <a
                    target="_blank"
                    className="option__button"
                    href={`https://api.whatsapp.com/send?text=https://tenderkit.kz/result/${url}`}
                  >
                    <span className="button__icon button__icon--before icon">
                      <WhatsappLogo className="icon__svg" />
                    </span>
                    WhatsApp
                  </a>
                </li>
                <li className="option__layout">
                  <a
                    target="_blank"
                    className="option__button"
                    href={`https://t.me/share/url?url=https://tenderkit.kz/result/${url}`}
                  >
                    <span className="button__icon button__icon--before icon">
                      <TelegramLogo className="icon__svg" />
                    </span>
                    Telegram
                  </a>
                </li>
                <li className="option__layout">
                  <button className="option__button" onClick={() => {
                      copyLinkToClipboard();
                      toggleShare();
                    }}>
                    <span className="button__icon button__icon--before icon">
                      <IconLink className="icon__svg" />
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
