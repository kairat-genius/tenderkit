import React, {useState} from "react";
import { ReactComponent as Angleup } from "../../../assets/svg/pointer/arrows/angleup.svg";

const Documents = () => {
    const [isDocsVisible, setDocsVisible] = useState(false);

    const toggleDocsVisibility = () => {
      setDocsVisible(!isDocsVisible);
    };
  return (
    <div class="lot__sidebar-section ng-star-inserted">
    <div class="lot__sidebar-title title title--h3">
      <div class={`toggle-button toggle-button--docs ng-star-inserted ${isDocsVisible ? "toggle-button--active" : ""}`} onClick={toggleDocsVisibility}>
        Документы
        <div class="toggle-button__icon icon">
          <Angleup class="icon__svg" />
        </div>
      </div>
    </div>
    {isDocsVisible && (
      <div class="lot__sidebar-layout ng-star-inserted">
        <a target="_blank" class="lot__link link link--default ng-star-inserted" href="https://v3bl.goszakup.gov.kz/files/download_file/202079016/" type="pdf">
         techspec_9992557_25988844.pdf </a>
        </div>
      )}
  </div>
  );
};

export default Documents;