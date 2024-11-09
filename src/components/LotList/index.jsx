import React from "react";
import { formatPurchaseType } from "../../hooks/LotUtils";

import DateTime from "./DateTime";
import LotActions from "./LotActions";

const LotList = ({ lot, checked, onChange, chekbox, folders, openDropdownId, setOpenDropdownId, FavoriteRemove }) => {
  return (
    <div className={`sr-item sr-item__container ${checked ? "sr-item--selected" : ""}`}>
      <div className="sr-item__container">
        {chekbox && (
          <div className="sr-item__before ng-star-inserted">
            <label htmlFor={lot.slug} className="checkbox checkbox--default">
              <input
                id={lot.slug}
                type="checkbox"
                className="checkbox__control"
                checked={checked}
                onChange={onChange}
              />
              <span className="checkbox__check"></span>
            </label>
          </div>
        )}
        <div className="sr-item__info">
          {lot.title && (
            <a
              className="sr-item__name ng-star-inserted"
              target="_blank"
              rel="noopener noreferrer"
              href={`/result/${lot.slug}`}
            >
              <h3 className="sr-item__title sr-item__title--before title highlight">
                {lot.title}
              </h3>
            </a>
          )}
          <div className="sr-item__layout">
            <dl className="description-list description-list--inline">
              {lot.deliveryAddress && (
                <div className="description-list__layout ng-star-inserted">
                  <dt className="description-list__key"> Место поставки: </dt>
                  <dd className="description-list__value">{lot.deliveryAddress}</dd>
                </div>
              )}
              {lot.organizer && (
                <div className="description-list__layout ng-star-inserted">
                  <dt className="description-list__key"> Организатор: </dt>
                  <dd className="description-list__value">{lot.organizer}</dd>
                </div>
              )}

              <div className="description-list__layout">
                {lot.lotNumber && (
                  <>
                    <dt className="description-list__key ng-star-inserted">
                      № Лота:
                    </dt>
                    <dd className="description-list__value ng-star-inserted">
                      <span className="ng-star-inserted">{lot.lotNumber}</span>
                    </dd>
                  </>
                )}
                {lot.truCode && (
                  <>
                    <dt className="description-list__key ng-star-inserted">
                      Код ТРУ:
                    </dt>
                    <dd className="description-list__value ng-star-inserted">
                      <span className="ng-star-inserted">{lot.truCode}</span>
                    </dd>
                  </>
                )}
              </div>
            </dl>
          </div>
          <DateTime lot={lot} />
        </div>
        <div className="sr-item__details">
          {lot.totalPrice && (
            <div className="sr-item__price ng-star-inserted">
              {lot.totalPrice} <span className="currency">₸</span>
            </div>
          )}
          {lot.status && (
            <div className="sr-item__status ng-star-inserted">
              <span className="sr-item__label">Статус</span>: {lot.status}
            </div>
          )}
          <div className="sr-item__attributes">
            {lot.purchaseType && (
              <span className="sr-item__badge sr-item__badge--secondary sr-item__badge--sm">
                {formatPurchaseType(lot.purchaseType)}
              </span>
            )}
            {lot.tenderSubjectType && (
              <span className="sr-item__badge sr-item__badge--secondary-outline sr-item__badge--sm">
                {lot.tenderSubjectType}
              </span>
            )}
          </div>
          <LotActions lot={lot} folders={folders}
          openDropdownId={openDropdownId}
          setOpenDropdownId={setOpenDropdownId}
          FavoriteRemove={FavoriteRemove}/>
        </div>
      </div>
    </div>
  );
};

export default LotList;
