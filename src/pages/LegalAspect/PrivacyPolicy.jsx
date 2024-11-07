import React from 'react';
import agreementData from "../../json/privacyPolicy.json";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTags from "../../components/MetaTags";

const PrivacyPolicy = () => {
    return (
        <div className="ng-star-inserted">
           <MetaTags page="privacyPolicy"/>
        <div className="layout__container">
          <div className="body">
            <div className="body__content">
            <Breadcrumb />
              <div className="body__container">
                <div className="page-lot">
                  <div className="page-lot__info">
                    <div className="lot">
                      <h1 className="lot__title title title--h3">
                      Политика конфиденциальности
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


export default PrivacyPolicy;