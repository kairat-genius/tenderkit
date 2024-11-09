import React, {useState} from "react";
import { ReactComponent as Angleup } from "../../../assets/svg/pointer/arrows/angleup.svg";

const Documents = ({allDocuments}) => {
    const [isDocsVisible, setDocsVisible] = useState(false);

    const toggleDocsVisibility = () => {
      setDocsVisible(!isDocsVisible);
    };
  return (
    <div className="lot__sidebar-section ng-star-inserted">
    <div className="lot__sidebar-title title title--h3">
      <div className={`toggle-button toggle-button--docs ng-star-inserted ${isDocsVisible ? "toggle-button--active" : ""}`} onClick={toggleDocsVisibility}>
        Документы
        <div className="toggle-button__icon icon">
          <Angleup className="icon__svg" />
        </div>
      </div>
    </div>
    {isDocsVisible && (
      <>
       {allDocuments.map((doc, index) => (
      <div className="lot__sidebar-layout ng-star-inserted" key={index}>
        <a target="_blank" className="lot__link link link--default ng-star-inserted" href={doc.url} type="pdf">
         {doc.fileName} </a>
        </div>
      ))}
        </>
      )}
  </div>
  );
};

export default Documents;