import React from "react";
import agreementData from "../../json/userAgreement.json";
import { Breadcrumb, MetaTags } from "../../components";
const UserAgreement = () => {
  return (
    <div className="ng-star-inserted">
         <MetaTags page="userAgreement"/>
      <div className="layout__container">
        <div className="body">
          <div className="body__content">
          <Breadcrumb />
            <div className="body__container">
              <div className="page-lot">
                <div className="page-lot__info">
                  <div className="lot">
                    <h1 className="lot__title title title--h3">
                      Пользовательское соглашение
                    </h1>
                    <div className="doc">
                      {agreementData.sections.map((section, index) => (
                        <div key={index}>
                          <strong>{section.title}
                          </strong>
                          <br/>
                          {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
