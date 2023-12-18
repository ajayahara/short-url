import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { detailsOfShortUrl } from "../redux/url/action";
import CopyToClipboard from "react-copy-to-clipboard";
import { CopyIcon } from "@radix-ui/react-icons";

const server = import.meta.env.VITE_SERVER;

export const UrlDetailsCard = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const { urlDetails } = useSelector((store) => {
    return { urlDetails: store.urlReducer.urlDetails };
  }, shallowEqual);
  const dispatch = useDispatch();
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  useEffect(() => {
    dispatch(detailsOfShortUrl(id));
  }, [id, dispatch]);
  return (
    <section className="border border-gray-700 p-6 rounded">
      <h2 className="text-xl font-semibold mb-2 color-text inline-block">
        All Information :
      </h2>
      {!urlDetails ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <span className="color-text">Title:</span>
            <span className="break-words h-12 sroll-bar overflow-y-scroll">
              {urlDetails.title}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="color-text">Description:</span>
            <span className="break-words h-12 sroll-bar overflow-y-scroll">
              {urlDetails.description}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="color-text">Original URL:</span>
            <span className="break-words h-12 sroll-bar overflow-y-scroll">
              {urlDetails.originalUrl}
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="color-text">Short ID:</span>
              <CopyToClipboard
                onCopy={copied ? () => {} : handleCopy}
                text={`${server}/${urlDetails.shortId}`}
                className="text-blue-500 hover:underline"
              >
                <button>
                  <CopyIcon />
                </button>
              </CopyToClipboard>
            </div>
            <span>{urlDetails.shortId}</span>
          </div>
          <div className="flex flex-col">
            <span className="color-text">Status:</span>
            <span>{urlDetails.status}</span>
          </div>
          <div className="flex flex-col">
            <span className="color-text">Start Date:</span>
            <span>{new Date(urlDetails.startDate).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="color-text">Expire Date:</span>
            <span>{new Date(urlDetails.expireDate).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="color-text">Total Visitors:</span>
            <span>{urlDetails.stats.totalVisitors}</span>
          </div>
          <div className="flex flex-col">
            <span className="color-text">Unique Visitors:</span>
            <span>{urlDetails.stats.uniqueVisitors}</span>
          </div>
        </div>
      )}
    </section>
  );
};
