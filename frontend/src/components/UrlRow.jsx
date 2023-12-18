import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  CopyIcon,
  InfoCircledIcon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
const server = import.meta.env.VITE_SERVER;
export const UrlRow = ({ index, page, url, handleDeleteClick, handleEditClick }) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <tr key={index} className="even:bg-gray-900">
      <td className="py-2 px-4">{(page-1)*10+index + 1}</td>
      <td className="py-2 px-4">{url.title}</td>
      <td className="py-2 px-4">{url.status}</td>
      <td className="py-2 px-4">{url.shortId}</td>
      <td className="py-2 px-4">
        <CopyToClipboard
          onCopy={copied ? () => {} : handleCopy}
          text={`${server}/${url.shortId}`}
          className="text-blue-500 hover:underline"
        >
          <button>
            <CopyIcon />
          </button>
        </CopyToClipboard>
      </td>
      <td className="py-2 px-4">
        <button
          onClick={() => navigate(`/details/${url._id}`)}
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
  );
};
