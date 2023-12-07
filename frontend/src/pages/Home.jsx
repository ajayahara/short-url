export const Home = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center text-white poppin">
      <form className="w-1/2 px-8 py-6 pb-4 shadow-xl border border-gray-600 rounded-lg">
        <div className="capitalize text-center text-2xl mb-2">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-blend-color">
            Create your short url
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col col-span-1 gap-2">
            <label htmlFor="original_url" className="text-md">
              Original URL :
            </label>
            <input
              type="text"
              className="border border-gray-600 p-2 rounded-lg focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-1 gap-2">
            <label htmlFor="title">Title :</label>
            <input
              type="text"
              className="border border-gray-600 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col col-span-1 gap-2">
            <label htmlFor="start_date">Start Date :</label>
            <input
              type="date"
              className="border border-gray-600 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col col-span-1 gap-2">
            <label htmlFor="expire_date">End Date :</label>
            <input
              type="date"
              className="border border-gray-600 p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col col-span-2 gap-2">
            <label htmlFor="description">Description :</label>
            <textarea
              name="description"
              className="border border-gray-600 p-2 rounded-lg"
            ></textarea>
          </div>
        </div>
        <div className="mt-4 flex justify-end items-center">
          <input
            type="submit"
            className="px-6 py-[.4rem] cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};
