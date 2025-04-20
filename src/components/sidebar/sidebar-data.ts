
export const mainCategories = [
  { id: 'electronics', name: "Electronics", count: 156 },
  { id: 'fashion', name: "Fashion", count: 89 },
  { id: 'home', name: "Home & Garden", count: 203 },
  { id: 'gaming', name: "Gaming", count: 78 },
  { id: 'groceries', name: "Groceries", count: 145 }
];

export const popularCategories = [
  { id: 'laptops', name: "Laptops", parentId: 'electronics', count: 42 },
  { id: 'smartphones', name: "Smartphones", parentId: 'electronics', count: 68 },
  { id: 'tvs', name: "TVs", parentId: 'electronics', count: 31 },
  { id: 'shoes', name: "Shoes", parentId: 'fashion', count: 35 },
  { id: 'clothing', name: "Clothing", parentId: 'fashion', count: 54 },
];

export const popularRetailers = [
  { id: 'amazon', name: "Amazon", count: 237 },
  { id: 'argos', name: "Argos", count: 124 },
  { id: 'currys', name: "Currys", count: 98 },
  { id: 'ebay', name: "eBay", count: 165 },
  { id: 'tesco', name: "Tesco", count: 87 },
];
