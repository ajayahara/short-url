import {
  CopyIcon,
  InfoCircledIcon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <CopyToClipboard
      onCopy={copied ? () => {} : handleCopy}
      text={text}
    >
      <button className={`${copied?'text-gray-500':'text-blue-500'}`}>
        <CopyIcon />
      </button>
    </CopyToClipboard>
  );
};
export const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-yellow-500 hover:underline">
      <Pencil2Icon />
    </button>
  );
};
export const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-red-500 hover:underline">
      <TrashIcon />
    </button>
  );
};
export const InfoButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-green-500 hover:underline">
      <InfoCircledIcon />
    </button>
  );
};
