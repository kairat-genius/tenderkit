import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
// svg
import { ReactComponent as IconLink } from "../../assets/svg/pointer/link/link.svg";
import { ReactComponent as IconShare } from "../../assets/svg/pointer/link/share.svg";
import { ReactComponent as WhatsappLogo } from "../../assets/svg/social/whatsapp-logo.svg";
import { ReactComponent as TelegramLogo } from "../../assets/svg/social/telegram-logo.svg";

const Share = () => {
    const [isSharerOpen, setIsShareOpen] = useState(false);

    const toggleShare = (e) => {
        setIsShareOpen(prevState => !prevState);
      };
  

  return (
    <div class="button-group__layout">
        <OutsideClickHandler onOutsideClick={() => setIsShareOpen(false)} >
      <div clickoutside="" class={`dropdown dropdown--folders ${isSharerOpen ? "dropdown--active" : "" }`}>
        <button
          class={`button button--action button--sm ${isSharerOpen ? "button--primary-transparent" : "" }`}
          onClick={toggleShare}
        >
          <span class="ng-star-inserted"> Поделиться </span>
          <span class="button__icon button__icon--after icon">
            <IconShare class="icon__svg" />
          </span>
        </button>
        {isSharerOpen && (
            <div class="dropdown__body">
              <ul class="option option--folders">
                <li class="option__layout">
                  <a
                    target="_blank"
                    class="option__button"
                    href="https://api.whatsapp.com/send?text=https://zakupki.kz/lot/dc051224-c619-4673-8548-1388dfdd3154/lot-info"
                  >
                    <span class="button__icon button__icon--before icon">
                      <WhatsappLogo class="icon__svg" />
                    </span>
                    WhatsApp
                  </a>
                </li>
                <li class="option__layout">
                  <a
                    target="_blank"
                    class="option__button"
                    href="https://t.me/share/url?url=https://zakupki.kz/lot/dc051224-c619-4673-8548-1388dfdd3154/lot-info"
                  >
                    <span class="button__icon button__icon--before icon">
                      <TelegramLogo class="icon__svg" />
                    </span>
                    Telegram
                  </a>
                </li>
                <li class="option__layout">
                  <button class="option__button" onClick={toggleShare}>
                    <span class="button__icon button__icon--before icon">
                      <IconLink class="icon__svg" />
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
