import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateShortUrl } from '../redux/url/action';

const initialFormData = {
  originalUrl: 'https://chat.openai.com/c/9a81af78-f858-4ba9-a981-1867cbcfbd1a',
  title: 'Chat Gpt Conversation ',
  startDate: '',
  expireDate: '',
  description: 'Redirect you to the redux conversation',
};

export const Home = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(generateShortUrl(formData));
    setFormData(initialFormData);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
      <form
        className="w-1/2 px-8 py-6 pb-4 shadow-xl border border-gray-600 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="text-center text-3xl mb-8">
          <h1 className="color-text">Create your short URL</h1>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* Original URL */}
          <div className="flex flex-col col-span-1 gap-2">
            <label htmlFor="originalUrl" className="text-md">
              Original URL:
            </label>
            <input
              type="text"
              name="originalUrl"
              required
              value={formData.originalUrl}
              onChange={handleChange}
              className="border border-gray-600 p-2 rounded-lg focus:outline-none"
            />
          </div>
          {/* Title */}
          <div className="flex flex-col col-span-1 gap-2">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-600 p-2 rounded-lg"
            />
          </div>
          {/* Start Date */}
          <div className="flex flex-col col-span-1 gap-2">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              name="startDate"
              required
              value={formData.startDate}
              onChange={handleChange}
              className="border border-gray-600 p-2 rounded-lg"
            />
          </div>
          {/* Expire Date */}
          <div className="flex flex-col col-span-1 gap-2">
            <label htmlFor="expireDate">End Date:</label>
            <input
              type="date"
              name="expireDate"
              required
              value={formData.expireDate}
              onChange={handleChange}
              className="border border-gray-600 p-2 rounded-lg"
            />
          </div>
          {/* Description */}
          <div className="flex flex-col col-span-2 gap-2">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-600 p-2 rounded-lg"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-4 flex justify-end items-center">
          <input
            type="submit"
            value="Generate"
            className="px-5 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};
