import axiosClient from "@/axiosClient";

export function searchProduct({ commit },keyword) {
  axiosClient.get(`product/search?name=${keyword}`)
  .then(({data}) => {
    commit('setSearchProduct', data);
  });
}