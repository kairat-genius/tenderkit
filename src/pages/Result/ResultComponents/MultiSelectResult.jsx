import React, { useEffect, useState } from "react";
import {getPurchaseType, getSubjectType, getStatus, getSource} from "../../../api/Lots/Filter"

// components Result MultiSelectResult
import { MultiSelect,} from "../../../components/Filter";

const MultiSelectResult = ({filters, handleFilterChange}) => {
  const [PurchaseType, setPurchaseType] = useState([])
  const [SubjectType, setSubjectType] = useState([])
  const [Status, setStatus] = useState([])
  const [Source, setSource] = useState([])
  useEffect(() => {
    getPurchaseType(setPurchaseType);
    getSubjectType(setSubjectType);
    getStatus(setStatus);
    getSource(setSource)
  }, []);
  return (
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <MultiSelect
                      filterName="tenderTypes"
                      label="Вид закупок"
                      options={PurchaseType}
                      value={filters.purchaseType || []}
                     onChange={(value) => handleFilterChange("purchaseType", value)}
                    />
                    <MultiSelect
                      filterName="tenderSubjectTypes"
                      label="Предмет закупок"
                      options={SubjectType}
                      value={filters.tenderSubjectType || []}
                     onChange={(value) => handleFilterChange("tenderSubjectType", value)}
                    />
                  </div>
                  <div class="field-group__section">
                    <MultiSelect
                      filterName="tenderTypes"
                      label="Статус"
                      options={Status}
                      value={filters.status || []}
                      onChange={(value) => handleFilterChange("status", value)}
                    />
                    <MultiSelect
                      filterName="tenderSubjectTypes"
                      label="Вид заказчика"
                      options={Source}
                      value={filters.source || []}
                     onChange={(value) => handleFilterChange("source", value)}
                  />
                  </div>
                </div>
              </div>
  );
};

export default MultiSelectResult;
