import axiosClient from "@/axiosClient";

export function searchProduct({ commit },keyword) {
  axiosClient.get(`product/search?name=${keyword}`)
  .then(({data}) => {
    commit('setSearchProduct', data);
  });
}

export function getProduct({ commit }, category_name) {
  let url = "/Product"; 
  if (category_name.toLowerCase() === "all") {
    url = '/Product';
    axiosClient.get(url)
    .then(({ data }) => {
      commit('getListProduct', data.products);
    })
    .catch(error => {
      console.error('Error getting product:', error);
    });
  } else {
    url = `Product/category/name/${category_name}`;
    axiosClient.get(url)
    .then(({ data }) => {
      commit('getListProduct', data);
    })
    .catch(error => {
      console.error('Error getting product:', error);
    });
  }
  
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