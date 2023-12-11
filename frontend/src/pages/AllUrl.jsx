const demoData = [
  {
    originalUrl: "https://example.com/page1",
    shortId: "abc123",
    userId: "user123",
    title: "Demo Page 1",
    description: "This is a demo page.",
    status: "active",
    startDate: new Date(),
    expireDate: new Date("2023-12-31"),
    stats: {
      totalVisitors: 100,
      uniqueVisitors: 80,
    },
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    originalUrl: "https://example.com/page1",
    shortId: "abc123",
    userId: "user123",
    title: "Demo Page 1",
    description: "This is a demo page.",
    status: "active",
    startDate: new Date(),
    expireDate: new Date("2023-12-31"),
    stats: {
      totalVisitors: 100,
      uniqueVisitors: 80,
    },
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    originalUrl: "https://example.com/page1",
    shortId: "abc123",
    userId: "user123",
    title: "Demo Page 1",
    description: "This is a demo page.",
    status: "active",
    startDate: new Date(),
    expireDate: new Date("2023-12-31"),
    stats: {
      totalVisitors: 100,
      uniqueVisitors: 80,
    },
  },
  {
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
  },
];

import { useState, useEffect } from "react";
import {
  CopyIcon,
  InfoCircledIcon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";

export const AllUrl = () => {
  const [allUrls, setAllUrls] = useState(demoData);

  useEffect(() => {
    // Fetch all URLs from your API or backend
    // You might want to use a library like axios or fetch for API requests
    const fetchAllUrls = async () => {
      // try {
      //   const response = await fetch('/api/all-urls'); // Replace with your actual API endpoint
      //   const data = await response.json();
      //   setAllUrls(data);
      // } catch (error) {
      //   console.error('Error fetching URLs', error);
      // }
    };

    fetchAllUrls();
  }, []); // Runs once on component mount

  const handleCopyClick = (url) => {
    // Implement the logic to copy the URL
    console.log(`Copying URL: ${url}`);
  };

  const handleDetailsClick = (urlId) => {
    // Implement the logic to navigate to details page or show a modal
    console.log(`View details for URL with ID: ${urlId}`);
  };

  const handleEditClick = (urlId) => {
    // Implement the logic to navigate to the edit page or show a form
    console.log(`Edit URL with ID: ${urlId}`);
  };

  const handleDeleteClick = (urlId) => {
    // Implement the logic to delete the URL
    console.log(`Delete URL with ID: ${urlId}`);
  };

  return (
    <div className="p-4 h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold mb-4 text-center color-text">
        Generated short urls
      </h1>
      <div className="w-full border border-gray-700 shadow-lg rounded-lg">
        <table className="min-w-full text-center overflow-hidden">
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
          <tbody className="min-h-screen text-white">
            {allUrls.map((url, index) => (
              <tr key={index} className="even:bg-gray-900">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{url.title}</td>
                <td className="py-2 px-4">{url.status}</td>
                <td className="py-2 px-4">{url.shortId}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleCopyClick(url.originalUrl)}
                    className="text-blue-500 hover:underline"
                  >
                    <CopyIcon />
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDetailsClick(url._id)}
                    className="text-green-500 hover:underline"
                  >
                    <InfoCircledIcon />
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEditClick(url._id)}
                    className="text-yellow-500 hover:underline"
                  >
                    <Pencil2Icon />
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDeleteClick(url._id)}
                    className="text-red-500 hover:underline"
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
