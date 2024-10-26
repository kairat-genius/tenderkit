import React from 'react';
import agreementData from "./userAgreement.json";
import { Breadcrumb } from "../../components";

const PrivacyPolicy = () => {
    return (
        <div class="ng-star-inserted">
        <div class="layout__container">
          <div class="body">
            <div class="body__content">
            <Breadcrumb />
              <div class="body__container">
                <div class="page-lot">
                  <div class="page-lot__info">
                    <div class="lot">
                      <h1 class="lot__title title title--h3">
                      Политика конфиденциальности
                      </h1>
                      <div class="doc">
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