<template>
  <nav class="bg-white w-full mb-10 z-30 top-0 start-0 border-b">
    <div
      class="max-w-screen-xl flex-nowrap flex items-center justify-between mx-auto p-4 md:flex-row flex-col-reverse"
    >
      <div class="flex flex-grow flex-wrap items-center w-full-1">
        <a
          href="/"
          class="flex items-0center space-x-3 m-4 rtl:space-x-reverse"
        >
          <!-- <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          /> -->
          <span class="self-center text-2xl font-semibold whitespace-nowrap"
            >Auction</span
          >
        </a>

        <form class="flex-grow mx-3 relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            required
          />
          <div
            class="absolute inset-y-0 end-0 flex items-center pr-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </form>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
          >
            <li>
              <router-link
                to="/Artirts"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                aria-current="page"
                >Artirts</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'artworks' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                aria-current="page"
                >Artworks</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'auction' }"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                aria-current="page"
                >Auctions</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="flex-row block">
        <button
          data-modal-target="Login-modal"
          data-modal-toggle="Login-modal"
          type="button"
          class="md:bx-auto py-2.5 px-5 mr-2 ml-4 my-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-800 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          log in
        </button>
        <button
          data-modal-target="Signup-modal"
          data-modal-toggle="Signup-modal"
          type="button"
          class="text-white bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mx-2 my-1"
        >
          Sign up
        </button>
      </div>
    </div>
  </nav>
  <login />
  <signup />
</template>
<script setup>
import login from "@/components/login.vue";
import signup from "@/components/signup.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<style scoped>
@media (max-width: 810px) {
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .w-full-1 {
    width: 100%;
  }
}
</style>
