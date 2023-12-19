import { useNavigate } from "react-router-dom";
import { CopyButton, DeleteButton, EditButton, InfoButton } from "./IconButton";
import {server} from '../utils/environment.js'
import { useDispatch } from "react-redux";
import { deleteShortUrl } from "../redux/url/action.js";
export const UrlRow = ({
  index,
  page,
  url,
  openEditModal
}) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleDelete=()=>{
    dispatch(deleteShortUrl(url._id))
  }
  return (
    <tr key={index} className="even:bg-gray-900">
      <td className="py-2 px-4">{(page - 1) * 10 + index + 1}</td>
      <td className="py-2 px-4">{url.title}</td>
      <td className="py-2 px-4">{url.status}</td>
      <td className="py-2 px-4">
        <a
          className="underline"
          target="_blank"
          rel="noreferrer"
          href={`${server}/${url.shortId}`}
        >
          {url.shortId}
        </a>
      </td>
      <td className="py-2 px-4">
        <CopyButton text={`${server}/${url.shortId}`} />
      </td>
      <td className="py-2 px-4">
        <InfoButton onClick={() => navigate(`/details/${url._id}`)} />
      </td>
      <td className="py-2 px-4">
        <EditButton onClick={()=>openEditModal(url)} />
      </td>
      <td className="py-2 px-4">
        <DeleteButton onClick={handleDelete} />
      </td>
    </tr>
  );
};
