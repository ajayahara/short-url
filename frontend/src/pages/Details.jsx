// UrlDetails.js

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { CopyIcon, InfoIcon, EditIcon, TrashIcon } from '@radix-ui/react-icons';

export const Details = () => {
  const { urlId } = useParams();
  const [urlDetails, setUrlDetails] = useState({
    originalUrl: "https://example.com/page2",
    shortId: "def456",
    userId: "user456",
    title: "Demo Page 2",
    description: "Another demo page.",
    status: "active",
    startDate: new Date(),
    expireDate: new Date("2023-12-31"),
    stats: {
      totalVisitors: 120,
      uniqueVisitors: 90,
    },
  });

  useEffect(() => {
    // Fetch the details for the specified URL
    // const fetchUrlDetails = async () => {
    //   try {
    //     const response = await fetch(`/api/url-details/${urlId}`); // Replace with your actual API endpoint
    //     const data = await response.json();
    //     setUrlDetails(data);
    //   } catch (error) {
    //     console.error('Error fetching URL details', error);
    //   }
    // };
    // fetchUrlDetails();
  }, [urlId]); // Re-fetch when the URL ID changes

  if (!urlDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 pt-16 text-white grid grid-cols-3 gap-4">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 color-text">
          Basic Information :
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="color-text">Title:</p>
            <p>{urlDetails.title}</p>
          </div>
          <div>
            <p className="color-text">Description:</p>
            <p>{urlDetails.description}</p>
          </div>
          <div>
            <p className="color-text">Original URL:</p>
            <p>{urlDetails.originalUrl}</p>
          </div>
          <div>
            <p className="color-text">Short ID:</p>
            <p>{urlDetails.shortId}</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 color-text">
          Status and Dates :
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="color-text">Status:</p>
            <p>{urlDetails.status}</p>
          </div>
          <div>
            <p className="color-text">Start Date:</p>
            <p>{new Date(urlDetails.startDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="color-text">Expire Date:</p>
            <p>{new Date(urlDetails.expireDate).toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 color-text">Statistics :</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="color-text">Total Visitors:</p>
            <p>{urlDetails.stats.totalVisitors}</p>
          </div>
          <div>
            <p className="color-text">Unique Visitors:</p>
            <p>{urlDetails.stats.uniqueVisitors}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
