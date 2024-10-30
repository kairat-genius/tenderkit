import React from "react";
import { formatPurchaseType } from "../../hooks/LotUtils";

import DateTime from "./DateTime";
import LotActions from "./LotActions";

const LotList = ({ lot, checked, onChange, chekbox, folders, openDropdownId, setOpenDropdownId, FavoriteRemove }) => {
  return (
    <div className={`sr-item ${checked ? "sr-item--selected" : ""}`}>
      <div class="sr-item__container">
        {chekbox && (
          <div class="sr-item__before ng-star-inserted">
            <label class="checkbox checkbox--default">
              <input
                type="checkbox"
                class="checkbox__control"
                checked={checked}
                onChange={onChange}
              />
              <span class="checkbox__check"></span>
            </label>
          </div>
        )}
        <div class="sr-item__info">
          {lot.title && (
            <a
              class="sr-item__name ng-star-inserted"
              target="_blank"
              rel="noopener noreferrer"
              href={`/result/${lot.slug}`}
            >
              <h3 class="sr-item__title sr-item__title--before title highlight">
                {lot.title}
              </h3>
            </a>
          )}
          <div class="sr-item__layout">
            <dl class="description-list description-list--inline">
              {lot.deliveryAddress && (
                <div class="description-list__layout ng-star-inserted">
                  <dt class="description-list__key"> Место поставки: </dt>
                  <dd class="description-list__value">{lot.deliveryAddress}</dd>
                </div>
              )}
              {lot.organizer && (
                <div class="description-list__layout ng-star-inserted">
                  <dt class="description-list__key"> Организатор: </dt>
                  <dd class="description-list__value">{lot.organizer}</dd>
                </div>
              )}

              <div class="description-list__layout">
                {lot.lotNumber && (
                  <>
                    <dt class="description-list__key ng-star-inserted">
                      № Лота:
                    </dt>
                    <dd class="description-list__value ng-star-inserted">
                      <span class="ng-star-inserted">{lot.lotNumber}</span>
                    </dd>
                  </>
                )}
                {lot.truCode && (
                  <>
                    <dt class="description-list__key ng-star-inserted">
                      Код ТРУ:
                    </dt>
                    <dd class="description-list__value ng-star-inserted">
                      <span class="ng-star-inserted">{lot.truCode}</span>
                    </dd>
                  </>
                )}
              </div>
            </dl>
          </div>
          <DateTime lot={lot} />
        </div>
        <div class="sr-item__details">
          {lot.totalPrice && (
            <div class="sr-item__price ng-star-inserted">
              {lot.totalPrice} <span class="currency">₸</span>
            </div>
          )}
          {lot.status && (
            <div class="sr-item__status ng-star-inserted">
              <span class="sr-item__label">Статус</span>: {lot.status}
            </div>
          )}
          <div class="sr-item__attributes">
            {lot.purchaseType && (
              <span class="sr-item__badge sr-item__badge--secondary sr-item__badge--sm">
                {formatPurchaseType(lot.purchaseType)}
              </span>
            )}
            {lot.tenderSubjectType && (
              <span class="sr-item__badge sr-item__badge--secondary-outline sr-item__badge--sm">
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
