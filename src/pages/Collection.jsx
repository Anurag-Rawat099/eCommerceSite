import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("relevant");

  //Toggle Category Selection
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  //Apply Filter and Sorting
  useEffect(() => {
    if (!products) return;

    let updatedProducts = [...products];

    //Apply Category Filter
    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        category.includes(product.category)
      );
    }

    //Apply Sub Category Filter
    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    //Apply Search
    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }

    // Apply Sorting
    if (sortType === "low-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(updatedProducts);
  }, [products, category, searchQuery, sortType, subCategory]);

  return (
    <div className="flex mt-5">
      <div className="l-side flex flex-col gap-7 w-60 px-3 py-2">
        <h2 className="font-bold">FILTER</h2>
        <div className="border p-4 gap-2">
          <h3 className="font-bold mb-2">CATEGORIES</h3>
          <input
            type="checkbox"
            onChange={toggleCategory}
            name="Men"
            id="Men"
            value="Men"
          />
          <label> Mens</label>
          <br />
          <input
            type="checkbox"
            onChange={toggleCategory}
            name="Women"
            id="Women"
            value="Women"
          />
          <label> Women</label>
          <br />
          <input
            type="checkbox"
            onChange={toggleCategory}
            name="Kids"
            id="Kids"
            value="Kids"
          />
          <label> Kids</label>
        </div>
        <div className="border p-4 gap-2">
          <h3 className="font-bold mb-2">SEARCH</h3>
          <input
            type="text"
            placeholder="Search products..."
            className="border p-1"
            onChange={handleSearch}
          />
        </div>
        <div className="border p-4 gap-2">
          <h3 className="font-bold mb-2">SUBCATEGORIES</h3>
          <input
            type="checkbox"
            onChange={toggleSubCategory}
            name="Topwear"
            id="Topwear"
            value="Topwear"
          />
          <label> Topwear</label>
          <br />
          <input
            type="checkbox"
            onChange={toggleSubCategory}
            name="Bottomwear"
            id="Bottomwear"
            value="Bottomwear"
          />
          <label> Bottomwear</label>
          <br />
          <input
            type="checkbox"
            onChange={toggleSubCategory}
            name="Winterwear"
            id="Winterwear"
            value="Winterwear"
          />
          <label> Winterwear</label>
        </div>
      </div>
      <div className="r-side w-full">
        <div className="flex justify-between items-center pb-5 py-5">
          <div className="flex items-center gap-2">
            <h1 className="text-xl text-gray-800">
              ALL <span className="font-bold">COLLECTIONS</span>
            </h1>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-500 "></p>
          </div>
          {/* Sorting Dropdown */}
          <div className="border px-2 py-2">
            <select
              onChange={(e) => setSortType(e.target.value)}
              value={sortType}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {filterProducts.map((item, i) => (
              <ProductItem
                key={i}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;