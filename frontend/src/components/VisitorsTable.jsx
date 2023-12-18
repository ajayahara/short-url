import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getAllVisitors } from "../redux/url/action";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
export const VisitorsTable = () => {
  const { id } = useParams();
  const { visitors } = useSelector((store) => {
    return { visitors: store.urlReducer.visitors };
  }, shallowEqual);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  useEffect(() => {
    setSearchParams({ page });
  }, [page, setSearchParams]);
  useEffect(() => {
    dispatch(getAllVisitors(id, page));
  }, [id, dispatch, page]);
  return (
    <section className="border border-gray-700 p-6 rounded mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-2 color-text inline-block">
          Generated short urls :
        </h2>
        <div className="flex items-center gap-2">
          <button
            disabled={page == 1}
            onClick={() => setPage((pre) => pre - 1)}
            className="text-green-500 disabled:text-gray-700 hover:underline border p-1 border-gray-700"
          >
            <ChevronLeftIcon className="w-4 h-4 font-bold" />
          </button>
          <button className="text-white hover:underline">{page}</button>
          <button
            disabled={visitors.length < 10}
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
            <th className="py-2 px-4">IP</th>
            <th className="py-2 px-4">Visit Date</th>
            <th className="py-2 px-4">Visit Time</th>
            <th className="py-2 px-4">Referer</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {visitors.map((visitor, index) => (
            <tr key={index} className="even:bg-gray-900">
              <td className="py-2 px-4">{(page - 1) * 10 + index + 1}</td>
              <td className="py-2 px-4">{visitor.ipAddress}</td>
              <td className="py-2 px-4">
                {new Date(visitor.createdAt).toLocaleDateString()}
              </td>
              <td className="py-2 px-4">
                {new Date(visitor.createdAt).toLocaleTimeString()}
              </td>
              <td className="py-2 px-4">{visitor.referFrom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
