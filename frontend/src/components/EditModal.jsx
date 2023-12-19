// EditUrlModal.js
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editShortUrl } from "../redux/url/action";
import {format} from 'date-fns'

const formatDate=(date)=>{
  return format(new Date(date), "yyyy-MM-dd");
}
const initialState={
  title: '',
  description: '',
  expireDate: '',
}
export const EditModal = ({ isOpen, onClose, url }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    if (!url) return;
    setFormData({
      title: url.title,
      description: url.description,
      expireDate: formatDate(url.expireDate),
    });
  }, [url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editShortUrl(url._id, formData));
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-gray-900 text-white w-1/3 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Edit URL</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="text-md">
                    Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData?.title}
                    onChange={handleChange}
                    className="border border-gray-600 p-2 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="expireDate">End Date:</label>
                  <input
                    type="date"
                    name="expireDate"
                    value={formData?.expireDate}
                    onChange={handleChange}
                    className="border border-gray-600 p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-2">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    name="description"
                    value={formData?.description}
                    onChange={handleChange}
                    className="border border-gray-600 p-2 rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
