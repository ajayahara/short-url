import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { clearDeleteUrl, clearEditUrl, getAllUrls } from "../redux/url/action";
import { UrlRow } from "../components/UrlRow";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { EditModal } from "../components/EditModal";

export const AllUrl = () => {
  const { urls, editSuccess, deleteSuccess } = useSelector(
    (store) => ({
      urls: store.urlReducer.urls,
      editSuccess: store.urlReducer.isEditUrlsSuccess,
      deleteSuccess: store.urlReducer.isDeleteUrlsSuccess,
    }),
    shallowEqual
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [filter, setFilter] = useState(searchParams.get("filter") || "all");
  const dispatch = useDispatch();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const openEditModal = (url) => {
    setSelectedUrl(url);
    setEditModalOpen(true);
  };
  const closeEditModal = () => {
    setSelectedUrl(null);
    setEditModalOpen(false);
  };

  useEffect(() => {
    if (!editSuccess) return;
    dispatch(getAllUrls(page, filter));
    dispatch(clearEditUrl());
  }, [editSuccess, dispatch, page, filter]);

  useEffect(() => {
    if (!deleteSuccess) return;
    dispatch(getAllUrls(page, filter));
    dispatch(clearDeleteUrl());
  }, [deleteSuccess, dispatch, page, filter]);

  useEffect(() => {
    setSearchParams({ page, filter });
  }, [page, filter, setSearchParams]);

  useEffect(() => {
    dispatch(getAllUrls(page, filter));
  }, [page, filter, dispatch]);

  return (
    <div className="p-4 mt-10 min-h-[90vh]">
      <section className="border border-gray-700 p-6 rounded mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2 color-text inline-block">
            Generated short urls :
          </h2>
          <div className="flex items-center gap-2">
            <select
              value={filter}
              onChange={(e) => {
                setPage(1);
                setFilter(e.target.value);
              }}
              className="text-white bg-gray-800 border border-gray-700 focus:outline-none"
            >
              <option value="all">All</option>
              <option value="expired">Expired</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
            <button
              disabled={page == 1}
              onClick={() => setPage((pre) => pre - 1)}
              className="text-green-500 disabled:text-gray-700 hover:underline border p-1 border-gray-700"
            >
              <ChevronLeftIcon className="w-4 h-4 font-bold" />
            </button>
            <button className="text-white hover:underline">{page}</button>
            <button
              disabled={urls.length < 10}
              onClick={() => setPage((pre) => pre + 1)}
              className="text-green-500 disabled:text-gray-700 hover:underline border p-1 border-gray-700"
            >
              <ChevronRightIcon className="w-4 h-4 font-bold" />
            </button>
          </div>
        </div>
        <table className="w-full text-center overflow-hidden">
          <thead className="border-b border-gray-600">
            <tr className="bg-gray-900 color-text">
              <th className="py-2 px-4">Sl No</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Short ID</th>
              <th className="py-2 px-4">Copy</th>
              <th className="py-2 px-4">Details</th>
              <th className="py-2 px-4">Edit</th>
              <th className="py-2 px-4">Delete</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {urls.map((url, index) => {
              return (
                <UrlRow
                  key={index}
                  page={page}
                  index={index}
                  url={url}
                  openEditModal={openEditModal}
                />
              );
            })}
          </tbody>
        </table>
        <EditModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          url={selectedUrl}
        />
      </section>
    </div>
  );
};
