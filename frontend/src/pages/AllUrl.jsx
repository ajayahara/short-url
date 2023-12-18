import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllUrls } from "../redux/url/action";
import { UrlRow } from "../components/UrlRow";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const AllUrl = () => {
  const dispatch = useDispatch();
  const { urls } = useSelector((store) => {
    const { isUrlsLoading, isUrlsError, errorUrlsMessage, urls } =
      store.urlReducer;
    return {
      loading: isUrlsLoading,
      error: isUrlsError,
      message: errorUrlsMessage,
      urls: urls,
    };
  }, shallowEqual);
  const [searchParams,setSearchParams]=useSearchParams()
  const [page, setPage] = useState(parseInt(searchParams.get('page')) || 1);

  const handleEditClick = (urlId) => {
    console.log(`Edit URL with ID: ${urlId}`);
  };

  const handleDeleteClick = (urlId) => {
    console.log(`Delete URL with ID: ${urlId}`);
  };
  useEffect(()=>{
    setSearchParams({page});
  },[page,setSearchParams]);
  useEffect(() => {
    dispatch(getAllUrls(page));
  }, [dispatch,page]);
  return (
    <div className="p-4 mt-10 min-h-[90vh]">
      <section className="border border-gray-700 p-6 rounded mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2 color-text inline-block">
            Generated short urls :
          </h2>
          <div className="flex items-center gap-2">
            <button disabled={page==1} onClick={()=>setPage(pre=>pre-1)} className="text-green-500 disabled:text-gray-700 hover:underline border p-1 border-gray-700">
              <ChevronLeftIcon className="w-4 h-4 font-bold" />
            </button>
            <button className="text-white hover:underline">{page}</button>
            <button disabled={urls.length<10} onClick={()=>setPage(pre=>pre+1)} className="text-green-500 disabled:text-gray-700 hover:underline border p-1 border-gray-700">
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
                  handleDeleteClick={handleDeleteClick}
                  handleEditClick={handleEditClick}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
