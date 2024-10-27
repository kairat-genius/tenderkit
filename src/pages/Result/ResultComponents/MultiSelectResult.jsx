import React from "react";

// components Result MultiSelectResult
import {
  MultiSelect,
} from "../../../components/Filter";


const tenderSubjectTypesOptions = [
  { id: "GOODS", label: "Товар" },
  { id: "WORKS", label: "Работа" },
  { id: "SERVICES", label: "Услуга" },
];

const tenderTypesOptions = [
  { id: "OT", label: "Тендеры и конкурсы" },
  { id: "CP", label: "Запрос ценовых предложений" },
  { id: "IO", label: "Из одного источника" },
  { id: "SP", label: "Особый порядок" },
];

const MultiSelectResult = () => {
  return (
              <div class="filter__layout">
                <div class="field-group">
                  <div class="field-group__section">
                    <MultiSelect
                      filterName="tenderTypes"
                      label="Вид закупок"
                      options={tenderTypesOptions}
                      selectedCount={1}
                    />
                    <MultiSelect
                      filterName="tenderSubjectTypes"
                      label="Предмет закупок"
                      options={tenderSubjectTypesOptions}
                      selectedCount={0}
                    />
                  </div>
                  <div class="field-group__section">
                    <MultiSelect
                      filterName="tenderTypes"
                      label="Вид закупок"
                      options={tenderTypesOptions}
                      selectedCount={1}
                    />
                    <MultiSelect
                      filterName="tenderSubjectTypes"
                      label="Предмет закупок"
                      options={tenderSubjectTypesOptions}
                      selectedCount={0}
                    />
                  </div>
                </div>
              </div>
  );
};

export default MultiSelectResult;
