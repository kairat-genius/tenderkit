import React, {useState} from "react";
import { ReactComponent as Angleup } from "../../../assets/svg/pointer/arrows/angleup.svg";

const Documents = ({allDocuments}) => {
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
      <>
       {allDocuments.map((doc, index) => (
      <div class="lot__sidebar-layout ng-star-inserted" key={index}>
        <a target="_blank" class="lot__link link link--default ng-star-inserted" href={doc.url} type="pdf">
         {doc.fileName} </a>
        </div>
      ))}
        </>
      )}
  </div>
  );
};

export default Documents;