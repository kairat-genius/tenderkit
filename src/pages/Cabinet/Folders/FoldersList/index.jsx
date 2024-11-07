import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getListCabinetFolder } from "../../../../api/User/Folder/getListCabinetFolder";
// svg
import { ReactComponent as FolderColored } from "../../../../assets/svg/document/folder-colored.svg";
import { ReactComponent as Plus } from "../../../../assets/svg/pointer/plus.svg";
import { ReactComponent as EditAltFilled } from "../../../../assets/svg/pointer/edit-alt-filled.svg";
import { ReactComponent as Trash } from "../../../../assets/svg/pointer/trash.svg";

// components FoldersList

import Pagination from "../../../../components/Pagination";
const CreateEditFolder = React.lazy(() => import("../../../../components/Folder/CreateEditFolder"));
const RemoveFolder = React.lazy(() => import("../../../../components/Folder/RemoveFolder"));

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
      <div className="body__iner-content body__iner-content--overflow ng-star-inserted">
        <h2 className="body__title title title--h3"> Папки</h2>
        <div className="body__layout ng-star-inserted">
          <div className="folders folders--cabinet">
            <div className="folders__table">
              <div className="folders__row folders__row--header">
                <div className="folders__cell folders__cell--w-full">
                  <div className="button-group">
                    <div className="button-group__layout">
                      <button className="folders__button folders__button--add button" onClick={openCreateModal}>
                        <span className="button__icon button__icon--before icon">
                          <Plus className="icon__svg" />
                        </span>
                        Создать новую папку
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {data.map((folder) => (
              <div className="folders__row ng-star-inserted" key={folder.id}>
                <Link
                  className="folders__cell folders__cell--w-full folders__cell--link"
                  to={`/cabinet/folders/${folder.title}`}
                >
                  <div className="button-group button-group--sm">
                    <div className="button-group__layout">
                      <button className="folders__button folders__button--folder button">
                        <span
                          className="button__icon icon"
                          style={{ color: "rgb(0, 122, 128)" }}
                        >
                          <FolderColored className="icon__svg" />
                        </span>
                      </button>
                    </div>
                    <div className="button-group__layout truncate">
                      <span className="truncate" title="папка">
                        {folder.title}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="folders__cell">
                  <div className="button-group">
                    <div className="button-group__layout button-group__layout--rtl">
                      <button
                        type="button"
                        className="folders__button folders__button--edit button"
                        onClick={openEditModal} 
                      >
                        <span className="button__icon icon">
                          <EditAltFilled className="icon__svg" />
                        </span>
                      </button>
                    </div>
                    <div className="button-group__layout">
                      <button
                        type="button"
                        className="folders__button folders__button--remove button"
                        onClick={() => openRemoveModal(folder)}
                      >
                        <span className="button__icon icon">
                          <Trash className="icon__svg" />
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
      <div className="body__layout">
        <div className="panel panel--footer">
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
