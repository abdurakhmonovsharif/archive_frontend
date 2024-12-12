import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { openModal } from "../common/modalSlice";
import { useEffect } from "react";
import { deletePageById, getPages } from "./pagesSlice";
import moment from "moment";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const openAddNewPageModal = () => {
    dispatch(
      openModal({
        title: "Sahifa ma'lumotlari",
        bodyType: MODAL_BODY_TYPES.ADD_NEW_PAGE,
      })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => openAddNewPageModal()}
      >
        Yangi sahifa
      </button>
    </div>
  );
};
const Pages = () => {
  const { pages } = useSelector((state) => state.pages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);
  const deleteCurrentPage = async (pageId) => {
    dispatch(deletePageById(pageId));
  };
  return (
    <TitleCard
      title="Sahifalar jadvali"
      topMargin="mt-2"
      TopSideButtons={<TopSideButtons />}
    >
      {/* Team Member list in table format loaded constant */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sahifa manzili (URL)</th>
              <th>O'zbekcha</th>
              <th>Ўзбекча</th>
              <th>English</th>
              <th>Русский</th>
              <th>Yaratilgan vaqti</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pages?.map((el, k) => {
              return (
                <tr key={k}>
                  <td>{el.path}</td>
                  <td>{el?.name.uz}</td>
                  <td>{el?.name.kr_uz}</td>
                  <td>{el?.name.en}</td>
                  <td>{el?.name.ru}</td>
                  <td>{moment(el.createdAt).format("DD.MM.YYYY - HH:MM")}</td>
                  <td>
                    <button
                      className="btn btn-square btn-ghost"
                      onClick={() => deleteCurrentPage(el.id)}
                    >
                      <TrashIcon className="w-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
};
export default Pages;
