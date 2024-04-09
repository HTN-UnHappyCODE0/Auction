import axiosClient from "@/axiosClient";

export function searchProduct({ commit },keyword) {
  axiosClient.get(`product/search?name=${keyword}`)
  .then(({data}) => {
    commit('setSearchProduct', data);
  });
}

export function getProduct({ commit },category_id) {
  axiosClient.get(`Product/category/name/${category_id}`)
  .then(({data}) => {
    commit('getListProduct', data);
  });
}

export function  fetchProductDetail({ commit }, productId) {
  return axiosClient.get(`/product/${productId}`)
    .then(({ data }) => {
      commit('SET_PRODUCT_DETAIL', data);
    })
    .catch((error) => {
      console.error('Error fetching product detail:', error);
    });
}

export function fetchProductByCategory({ commit }) {
 axiosClient.get('/category')
      .then(({ data }) => {
        commit('SET_CATEGORIES', data);
      })
};