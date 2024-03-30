<template>
  <!-- drawer init and toggle -->

  <div class="h-30 mt-10 mx-auto max-w-screen-xl">
    <div class="xl:flex flex-wrap justify-between">
      <h2 class="mb-5 text-2xl mx-8 max-w-lg lg:max-w-lg lg:text-4xl">Ảnh</h2>
      <h2 class="text-1xl mx-8 max-w-lg lg:max-w-lg lg:text-1xl">
        Với 161.382 bản in phiên bản giới hạn và phiên bản mở để bạn lựa chọn, cung cấp những bức ảnh chất lượng cao
        hoàn toàn phù hợp với không gian của bạn
      </h2>
    </div>
    <!-- <div class="flex flex-wrap justify-between">
      <h2 class="text-2xl mx-8 max-w-lg lg:max-w-lg lg:text-4xl">Ảnh</h2>
    </div> -->

    <!-- <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      <li v-for="(item, index) in items" :key="index" class="snap-align-none">
        <div class="group min-w-10 relative">
          <div
            class="w-full max-h-40 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="item.imageUrl"
              :alt="item.altText"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="item.link">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ item.title }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </li>
    </ul> -->

    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
  </div>
  <div class="flex justify-between mx-auto max-w-screen-xl">
    <button type="button"
      class="text-gray-950  bg-white mx-8 rounded-full h-10  border border-gray-800 hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium text-sm px-5  text-center inline-flex items-center me-2 mb-2"
      data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
      <svg class="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
        viewBox="0 0 512 512">
        <path
          d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
      </svg>
      Lọc
    </button>
    <div> <select id="default"
        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 ">
        <option selected>All</option>
        <option value="US">Tranh</option>
        <option value="CA">Ảnh</option>

      </select></div>

  </div>


  <div class="flex flex-wrap mx-auto max-w-screen-xl">
    <div class="ml-8"><button v-for="(color, index) in selectedCategories" :key="index" type="button"
        class="text-gray-950  bg-gray-300 rounded-full border border-inherit hover:text-blue-700 hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
        @click="removeColor(index)">
        {{ color }}
        <span class="mx-1">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </span>
      </button></div>

  </div>
  <div class="h-full mt-10 mx-auto max-w-screen-xl">
    <div class="flex flex-wrap justify-between">
      <h2 class="text-2xl mx-8 max-w-lg lg:max-w-lg lg:text-4xl">Auctions</h2>
    </div>

    <ul class="my-8 mx-8 columns-2 lg:columns-3">
      <li v-for="(item, index) in slicedProducts" :key="index" class="h-full">
        <router-link :to="{ name: 'productDetail', params: { productName: item.name } }">
          <div class="group min-w-10 mb-5 relative">
            <div class="w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:h-full">
              <img :src="item.imageUrl" :alt="item.altText"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a :href="item.link">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {{ item.title }}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>

    <fwb-pagination v-model="currentPage" :total-items="totalItems" :total-pages="totalPages" :show-labels="false"
      class="flex mt-10 max-w-screen-xl mx-auto justify-center">
      <template #prev-icon>Prev</template>
      <template #next-icon>Next</template>
      <template v-slot:page-button="{ page, setPage }">
        <button @click="setPage(page)"
          class="flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-3 h-8 ml-0 leading-tight text-gray-500 border border-white hover:text-gray-700 hover:underline">
          {{ page }}
        </button>
      </template>
    </fwb-pagination>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
  </div>
  <drawer @update:selectedCategories="handleselectedCategoriesUpdate" />
</template>

<script>
import data from "../../public/data.json";

export default {
  data() {
    return {
      items: data,
      selectedCategories: [],
      openSort: true,
      sortType: "Sort by",
    };
  },
  methods: {
    toggleSort() {
      this.openSort = !this.openSort;
    },
    updateSort(type) {
      this.sortType = type;
      this.openSort = !this.openSort;
    },
    handleselectedCategoriesUpdate(selectedCategories) {
      this.selectedCategories = selectedCategories;
    },
    removeColor(index) {
      this.selectedCategories.splice(index, 1);
    },
    removeSize(sizeValue) {
      const updatedSizes = this.sizes.map((size) => {
        if (size.value === sizeValue) {
          return { ...size, checked: false };
        }
        return size;
      });
      this.$emit("updateSelectedSizes", updatedSizes);
    },
  },
};
</script>

<script setup>
import drawer from "../components/drawer.vue";
import { FwbPagination } from "flowbite-vue";
import { ref, computed } from "vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
const currentPage = ref(1);
const totalItems = ref(data.length);
const totalPages = ref(Math.ceil(data.length / 9));

const slicedProducts = computed(() => {
  const start = (currentPage.value - 1) * 9;
  return data.slice(start, start + 9);
});
</script>
