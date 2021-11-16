exports.Category = {
  products: ({ id }, { filter }, { products }) => {
    const categoryProducts = products.filter(
      (product) => product.categoryId === id
    );
    let filteredCategoryProducts = categoryProducts;
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => product.onSale
        );
      }
    }

    return filteredCategoryProducts;
  },
};
