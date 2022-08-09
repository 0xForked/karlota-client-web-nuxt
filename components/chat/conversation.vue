<template>
  <section class="bg-white dark:bg-gray-700 shadow-md rounded w-11/12 h-5/6 m-auto grid grid-cols-3 divide-x">
    <div class="flex flex-col p-4">
      <h4 class="font-bold block dark:text-white">Chat</h4>

      <div class="flex flex-row mt-3 p-2 border-2 rounded-lg border-blue-200 bg-blue-50 dark:bg-gray-600">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#93ECE8" />
          <path
            d="M24 27C27.3137 27 30 24.3137 30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21C18 24.3137 20.6863 27 24 27Z"
            stroke="#21B6AE"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M14.9062 32.2499C15.8278 30.6534 17.1533 29.3277 18.7496 28.406C20.3459 27.4843 22.1567 26.999 24 26.999C25.8433 26.999 27.6541 27.4843 29.2504 28.406C30.8467 29.3277 32.1722 30.6534 33.0938 32.2499"
            stroke="#21B6AE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div class="flex flex-col px-3">
          <p class="font-semibold text-xs dark:text-white">Laurence</p>
          <p class="text-xs text-gray-500 dark:text-gray-300">I want to discuss with the doct..</p>
        </div>
        <p class="text-xs text-gray-400">10:10</p>
      </div>


      <div class="flex flex-row mt-3 p-2 border-2 rounded-lg border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-600">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#93ECE8" />
          <path
            d="M24 27C27.3137 27 30 24.3137 30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21C18 24.3137 20.6863 27 24 27Z"
            stroke="#21B6AE"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M14.9062 32.2499C15.8278 30.6534 17.1533 29.3277 18.7496 28.406C20.3459 27.4843 22.1567 26.999 24 26.999C25.8433 26.999 27.6541 27.4843 29.2504 28.406C30.8467 29.3277 32.1722 30.6534 33.0938 32.2499"
            stroke="#21B6AE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div class="flex flex-col px-3">
          <p class="font-semibold text-xs dark:text-white">Lorto</p>
          <p class="text-xs text-gray-500 dark:text-gray-300">I want to ask and then asd qwe is..</p>
        </div>
        <p class="text-xs text-gray-400">10:10</p>
      </div>           
    </div>
    

    <div class="col-span-2 flex flex-col w-full p-4">
      <div class="flex flex-row items-center h-14 w-full">
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#93ECE8" />
          <path
            d="M24 27C27.3137 27 30 24.3137 30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21C18 24.3137 20.6863 27 24 27Z"
            stroke="#21B6AE"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M14.9062 32.2499C15.8278 30.6534 17.1533 29.3277 18.7496 28.406C20.3459 27.4843 22.1567 26.999 24 26.999C25.8433 26.999 27.6541 27.4843 29.2504 28.406C30.8467 29.3277 32.1722 30.6534 33.0938 32.2499"
            stroke="#21B6AE"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div class="flex flex-col px-3">
          <p class="font-semibold text-xs dark:text-white">Laurence</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Last online 10 minutes ago</p>
        </div>
        <div class="ml-auto">
          <svg
            width="6"
            height="16"
            viewBox="0 0 6 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3ZM6 14C6 15.6569 4.65685 17 3 17C1.34315 17 0 15.6569 0 14C0 12.3431 1.34315 11 3 11C4.65685 11 6 12.3431 6 14ZM3 28C4.65685 28 6 26.6569 6 25C6 23.3431 4.65685 22 3 22C1.34315 22 0 23.3431 0 25C0 26.6569 1.34315 28 3 28Z"
              fill="#BEC4C8"
            />
          </svg>
        </div>
      </div>

      <div class="h-full my-4 max-h-screen overflow-y-auto">
        <div class="bg-white border-2 border-gray-200 rounded-r-lg rounded-bl-lg w-fit p-2 text-sm">
          Hello World
        </div>

        <div class="bg-blue-600 border-blue-700 text-white mt-2 border-2 rounded-l-lg rounded-br-lg w-fit p-2 text-sm ml-auto">
          From Chat Screen
        </div>
      </div>

      <div class="h-16">
        <form>
          <div class="relative">
            <button
              type="submit"
              class="text-white absolute left-2.5 bottom-2.5 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-14 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write a message . . ."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 rotate-90"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>