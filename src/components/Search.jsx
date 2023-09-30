import React from "react";

const Search = () => {
  return (
    <>
      <div className="bg-[#151515] w-full h-10">
        <div className="flex flex-row justify-center items-center">
          <div class="relative text-[#E8E6E3] mt-4">
            <input
              class="border border-[#919191] bg-[#151515] h-10 w-full px-5 pr-10 rounded-full text-m focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              class=" bg-[#151515] h-full w-8 border border-[#919191] rounded-r-full absolute right-0 top-0"
            >
              <svg
                class="text-white h-6 w-6 fill-current pl-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
              >
                <path d="M56.146 51.132l-11.806-11.807a23.868 23.868 0 001.732-9.235C45.071 14.239 35.832 5 24.986 5S4.901 14.239 4.901 24.09s9.238 19.09 19.085 19.09c3.745 0 7.292-1.084 10.315-3.135l11.852 11.852c.48.481 1.127.721 1.775.721.649 0 1.297-.24 1.777-.721a2.508 2.508 0 000-3.554zM24.986 41.18c-9.413 0-17.09-7.676-17.09-17.09S15.573 7 24.986 7s17.09 7.676 17.09 17.09-7.676 17.09-17.09 17.09z" />
              </svg>
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9 text-white pl-2 mt-5 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
          <div className=" cursor-pointer flex bg-[##3c3c3c] mt-4 h-10 w-25 ... border rounded-full border-[#919191] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-[#3ea6ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-[#3ea6ff]">Sign In</p>
          </div>
        </div>
      </div>

      <div className="bg-[#151515] w-full h-10">
        <div class="flex items-center space-x-2 pt-5 mt-4 pl-2 ml-4 mr-1">
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Recommended
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Trending
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Music
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Live
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Bollywood Music
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Cricket
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            News
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Gaming
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Cinema
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Dramedy
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Cooking shows
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Game shows
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Action Thrillers
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Football
          </span>
          <span class="cursor-pointer bg-[#00000D] border border-[#919191] text-white py-1 px-2 rounded-lg text-xs font-medium">
            Recently uploaded
          </span>
        </div>
      </div>
    </>
  );
};

export default Search;
