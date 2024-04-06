export function setSearchProduct(state,product){
    state.searchProduct = product.products
    state.totalPage = product.totalPage
}

export function SET_PRODUCT_DETAIL(state, product) {
    state.productDetail = product;
}

// Trong file mutations.js

export function SET_CATEGORIES(state, categories) {
      state.categories = categories;
    }
  
  