exports.Query = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;
    if (filter) {
      const { avgRating, onSale } = filter;
      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numOfReviews = 0;

          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numOfReviews += 1;
            }
          });
          const avgProductRating = sumRating / numOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  categories: () => categories,
  category: (parent, { id }, { categories }) =>
    categories.find((category) => category.id === id),
};
