import { useState } from "react";
import { useDispatch } from "react-redux";
import InputText from "../../../components/Input/InputText";
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
import { createPage } from "../pagesSlice";

const INITIAL_PAGE_OBJ = {
  path: "",
  name: {
    en: "",
    ru: "",
    uz: "",
    kr_uz: "",
  },
};
const requiredMessages = {
  uz: "O'zbekcha bo'shliqni to'ldirish shart!",
  en: "English is required!",
  ru: "Русский должен заполнить пустоту!",
  kr_uz: "Ўзбекча бўшлиқни тўлдириш шарт!",
  path: "Nomi bo'shliqni to'ldirish shart!",
};

function AddNewPage({ closeModal }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [pageObj, setPageObj] = useState(INITIAL_PAGE_OBJ);

  const validationPageObj = () => {
    if (pageObj.path.trim() === "") {
      setErrorMessage(requiredMessages.path);
      return false;
    }
    for (let key in pageObj.name) {
      if (pageObj.name[key].trim() === "") {
        setErrorMessage(requiredMessages[key]);
        return false;
      }
    }
    return true;
  };

  const saveNewPage = () => {
    if (!validationPageObj()) return;
    dispatch(createPage(pageObj)).then(() => {
      dispatch(showNotification({ message: "Yangi sahifa yaratildi!", status: 1 }));
      closeModal();
    });
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    if (updateType === "path") {
      setPageObj((prev) => ({ ...prev, path: value }));
    } else {
      setPageObj((prev) => ({
        ...prev,
        name: { ...prev.name, [updateType]: value },
      }));
    }
  };

  return (
    <>
      <InputText
        type="text"
        defaultValue={pageObj.path}
        updateType="path"
        containerStyle="mt-4"
        labelTitle="Sahifa manzili (URL)"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={pageObj.name.en}
        updateType="en"
        containerStyle="mt-4"
        labelTitle="English"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={pageObj.name.ru}
        updateType="ru"
        containerStyle="mt-4"
        labelTitle="Русский"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={pageObj.name.uz}
        updateType="uz"
        containerStyle="mt-4"
        labelTitle="O'zbekcha"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text" 
        defaultValue={pageObj.name.kr_uz}
        updateType="kr_uz"
        containerStyle="mt-4"
        labelTitle="Ўзбекча"
        updateFormValue={updateFormValue}
      />

      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Bekor qilish
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewPage()}>
          Saqlash
        </button>
      </div>
    </>
  );
}

export default AddNewPage;
