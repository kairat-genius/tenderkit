import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getListCabinetFolder } from "../../../../api/User/Folder/getListCabinetFolder";
// svg
import { ReactComponent as FolderColored } from "../../../../assets/svg/document/folder-colored.svg";
import { ReactComponent as Plus } from "../../../../assets/svg/pointer/plus.svg";
import { ReactComponent as EditAltFilled } from "../../../../assets/svg/pointer/edit-alt-filled.svg";
import { ReactComponent as Trash } from "../../../../assets/svg/pointer/trash.svg";

// components FoldersList
import {CreateEditFolder, RemoveFolder, Pagination} from "../../../../components";

const FoldersList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [selectedFolder, setSelectedFolder] = useState({ id: null, title: "" }); 

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12


  useEffect (() =>{
     getListCabinetFolder({setData, setCount, currentPage})
  }, [currentPage]);

  const refreshFolders = () => {
    getListCabinetFolder({ setData, setCount, currentPage }); 
  };

  const totalPages = Math.ceil(count / itemsPerPage);

const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
  }
};

  const openCreateModal = () => {
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const openEditModal = () => {
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const openRemoveModal = (folder) => {
    setSelectedFolder(folder); 
    setIsRemoveModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRemoveModalOpen(false);
    setSelectedFolder({ id: null, title: "" }); 
  };

  const removeFolder = (folderId) => {
    setData((prevData) => prevData.filter(folder => folder.id !== folderId));
    setCount((prevCount) => prevCount - 1);
  };

  const isFolderNameUnique = (name) => {
    return !data.some((folder) => folder.title.toLowerCase() === name.toLowerCase());
  };


  return (
    <>
      <div class="body__iner-content body__iner-content--overflow ng-star-inserted">
        <h2 class="body__title title title--h3"> Папки</h2>
        <div class="body__layout ng-star-inserted">
          <div class="folders folders--cabinet">
            <div class="folders__table">
              <div class="folders__row folders__row--header">
                <div class="folders__cell folders__cell--w-full">
                  <div class="button-group">
                    <div class="button-group__layout">
                      <button class="folders__button folders__button--add button" onClick={openCreateModal}>
                        <span class="button__icon button__icon--before icon">
                          <Plus class="icon__svg" />
                        </span>
                        Создать новую папку
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {data.map((folder) => (
              <div class="folders__row ng-star-inserted" key={folder.id}>
                <Link
                  className="folders__cell folders__cell--w-full folders__cell--link"
                  to={`/cabinet/folders/${folder.title}`}
                >
                  <div class="button-group button-group--sm">
                    <div class="button-group__layout">
                      <a class="folders__button folders__button--folder button">
                        <span
                          class="button__icon icon"
                          style={{ color: "rgb(0, 122, 128)" }}
                        >
                          <FolderColored class="icon__svg" />
                        </span>
                      </a>
                    </div>
                    <div class="button-group__layout truncate">
                      <span class="truncate" title="папка">
                        {folder.title}
                      </span>
                    </div>
                  </div>
                </Link>
                <div class="folders__cell">
                  <div class="button-group">
                    <div class="button-group__layout button-group__layout--rtl">
                      <button
                        type="button"
                        class="folders__button folders__button--edit button"
                        onClick={openEditModal} 
                      >
                        <span class="button__icon icon">
                          <EditAltFilled class="icon__svg" />
                        </span>
                      </button>
                    </div>
                    <div class="button-group__layout">
                      <button
                        type="button"
                        class="folders__button folders__button--remove button"
                        onClick={() => openRemoveModal(folder)}
                      >
                        <span class="button__icon icon">
                          <Trash class="icon__svg" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        {totalPages > 1 && (
      <div class="body__layout">
        <div class="panel panel--footer">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
      )}
      </div>
      {isModalOpen && <CreateEditFolder closeModal={closeModal} isEditing={isEditing} refreshFolders={refreshFolders} existingFolders={isFolderNameUnique}  />}
      {isRemoveModalOpen && <RemoveFolder closeModal={closeModal} folder={selectedFolder} onRemove={removeFolder}/>}
    </>
  );
};

export default FoldersList;
