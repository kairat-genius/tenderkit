import React, { useState, useEffect, useRef } from "react";
import { getOrganizer } from "../../api/Lots/Filter/getOrganizer";
import { ReactComponent as CloseCircle } from "../../assets/svg/pointer/close-circle.svg";
import { ReactComponent as Trash } from "../../assets/svg/pointer/trash.svg";

const OrganizerModal = ({
  onClose,
  filters,
  handleFilterChange,
  isOrganizerModalOpen,
}) => {
  const [organizers, setOrganizers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const modalRef = useRef(null);

  // Load saved organizers from localStorage and set in filters when the modal opens
  useEffect(() => {
    const savedOrganizers =
      JSON.parse(localStorage.getItem("selectedOrganizers")) || [];
    if (savedOrganizers.length) {
      const savedIds = savedOrganizers.map((org) => org.id);
      handleFilterChange("organizer", savedIds); // Set state with saved organizer IDs
    }
  }, [handleFilterChange]);

  useEffect(() => {
    if (searchTerm.trim()) {
      getOrganizer(setOrganizers, searchTerm);
      setShowDropdown(true);
    } else {
      setOrganizers([]);
      setShowDropdown(false);
    }
  }, [searchTerm]);

  const updateLocalStorage = (updatedOrganizers) => {
    const organizerData = updatedOrganizers
      .map((organizerId) => {
        const organizer = organizers.find((org) => org.id === organizerId);
        return organizer ? { id: organizer.id, title: organizer.title } : null;
      })
      .filter(Boolean);

    localStorage.setItem("selectedOrganizers", JSON.stringify(organizerData));
  };

  const handleCheckboxChange = (organizerId) => {
    const selectedOrganizers = filters.organizer || [];

    // Limit selection to 5 organizers
    if (!selectedOrganizers.includes(organizerId) && selectedOrganizers.length >= 5) {
      return; // Exit if limit is reached
    }

    const updatedOrganizers = selectedOrganizers.includes(organizerId)
      ? selectedOrganizers.filter((id) => id !== organizerId)
      : [...selectedOrganizers, organizerId];

    handleFilterChange("organizer", updatedOrganizers);
    updateLocalStorage(updatedOrganizers); // Update localStorage with new selection
  };

  const handleRemoveSelectedOrganizer = (organizerId) => {
    const selectedOrganizers = filters.organizer || [];
    const updatedOrganizers = selectedOrganizers.filter(
      (id) => id !== organizerId
    );

    handleFilterChange("organizer", updatedOrganizers);
    updateLocalStorage(updatedOrganizers); // Update localStorage after removal
  };

  const clearAllOrganizers = () => {
    handleFilterChange("organizer", []); // Clear selected organizers
    updateLocalStorage([]); // Clear localStorage
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSave = () => {
    onClose(); // Just close the modal on save
  };

  return (
    <div
      className={`modal modal--lg modal--companies ${
        isOrganizerModalOpen ? "modal--active" : ""
      } ng-star-inserted`}
    >
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title">Организаторы</div>
          <div className="modal__close" onClick={onClose}></div>
        </div>
        <div className="modal__body" ref={modalRef}>
          <div className="modal__section">
            <div className="modal__layout">
              <form
                noValidate=""
                autoComplete="off"
                className="hero-search hero-search--multi ng-untouched ng-pristine ng-valid hero-search--active ng-submitted"
              >
                <div className="hero-search__label">Организаторы</div>
                <div className="hero-search__body">
                  <div className="hero-search__tags">
                    {filters.organizer?.map((organizerId) => {
                      const organizer = organizers.find(
                        (org) => org.id === organizerId
                      );
                      return (
                        organizer && (
                          <div className="hero-search__tag" key={organizerId}>
                            <span className="tag tag--action">
                              <span
                                className="tag__label"
                                title={organizer.title}
                              >
                                {organizer.title}
                              </span>
                              <button
                                type="button"
                                className="tag__button button"
                                title="Удалить"
                                onClick={() =>
                                  handleRemoveSelectedOrganizer(organizerId)
                                }
                              >
                                <span className="icon">
                                  <CloseCircle className="icon__svg" />
                                </span>
                              </button>
                            </span>
                          </div>
                        )
                      );
                    })}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Наименование или БИН/ИИН"
                        value={searchTerm}
                        className="hero-search__input"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div
                        className="hero-search__actions"
                        style={{
                          marginTop: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="hero-search__action ng-star-inserted">
                          <div className="hero-search__count">
                            {filters.organizer?.length || 0} / 5
                          </div>
                        </div>
                        <div className="hero-search__action hero-search__action--remove ng-star-inserted">
                          <button
                            type="button"
                            className="hero-search__remove button"
                            title="Очистить поле"
                            onClick={clearAllOrganizers}
                          >
                            <span className="button__icon icon">
                              <Trash />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {showDropdown && (
                  <div className="hero-search__dropdown">
                    {organizers.length > 0 ? (
                      organizers.map((organizer) => (
                        <div
                          className="hero-search__option"
                          key={organizer.id}
                          onClick={() => handleCheckboxChange(organizer.id)}
                        >
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              className="checkbox__control"
                              id={organizer.id}
                              checked={filters.organizer?.includes(
                                organizer.id
                              )}
                              onChange={() =>
                                handleCheckboxChange(organizer.id)
                              }
                            />
                            <div className="checkbox__check"></div>
                            <label className="checkbox__label">
                              {organizer.title}
                            </label>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="hero-search__option">
                        Ничего не найдено
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <div className="button-group button-group--sm">
            <div className="button-group__layout">
              <button
                className="button button--primary-transparent button--expand"
                onClick={onClose}
              >
                Отменить
              </button>
            </div>
            <div className="button-group__layout">
              <button
                type="button"
                className="button button--primary button--expand"
                onClick={handleSave}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerModal;
