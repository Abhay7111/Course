import React, { useEffect, useState } from "react";

function Testdata() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUsers(data.items);
      setError(null);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      setUsers([]);
    }
  };

  return (
    <div className=" w-full h-auto flex flex-col items-center">
      <h1 className=" text-4xl font-bold mt-4">Search GitHub Users</h1>
      <form
        onSubmit={handleSubmit}
        className=" mt-5 gap-3 w-1/2 flex flex-row mb-5 justify-center items-center"
      >
        <input
          type="text"
          name="username"
          placeholder="Enter a GitHub username"
          value={searchTerm}
          onChange={handleChange}
          className=" w-full py-3
         rounded-2xl text-center bg-[#E8F0FE] text-zinc-800 px-2 outline-none"
        />
        <button
          type="submit"
          className=" hover:bg-blue-600 py-2 bg-blue-500 rounded-xl ml-2 w-1/4"
        >
          Search
        </button>
      </form>
      {error && <p>{error}</p>}
      <ul className=" w-full flex gap-2 flex-wrap px-5 items-start justify-center ">
        {users.map((user) => (
          <li key={user.id} className="relative mb-1 imagehover cursor-pointer">
            <div className="  bg-clr2 px-3 py-2 rounded-t-md flex">
              <img
                className=" open_image hover:scale-[1.1] w-10 h-10 object-cover rounded-xl"
                src={user.avatar_url}
                alt="not found"
              />
              <div className=" text-zinc-800 flex px-2 items-center justify-start">
                <a
                  className=" hover:scale-[1.02] text-xl font-normal tracking-tighter ml-3 hover:text-blue-500"
                  href={user.html_url}
                >
                  {user.login}
                </a>
              </div>
            </div>
            <div className=" w-full bg-clr2 rounded-b-md flex flex-col items-center justify-start after:w-4 after:h-2 after:-bottom-2 after:bg-[#FFAF8D] after:absolute after:rounded-b-full">
              <div className=" w-full h-10 px-2 gap-3 flex justify-between mt-2">
                <a
                  href={user.url}
                  className="text-blue-600 tracking-tighter scale-[1.3]"
                >
                  <i class="ri-spy-fill text-indigo-600"></i>
                </a>
                <p className=" text-zinc-800 text-[0.8rem]">
                  Score{" "}
                  <span className="text-blue-600 text-[1rem]">
                    {user.score}
                  </span>
                </p>
              </div>
            </div>
            <div className=" w-1 animate-ping h-1 bg-green-700 rounded-full absolute top-3 right-2 "></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Testdata;
