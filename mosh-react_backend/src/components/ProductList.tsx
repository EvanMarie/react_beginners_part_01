import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in ", category);
    /* Without the second argument (array of dependencies), results are constant rendering 
    loop. These dependencies can be one or more variables, props or state, upon which the 
    effect will be dependent.
    - If any of the dependency values changes, React will re-run and re-render the effect.
    - Empty array means the effect is not dependent on any values.
    - This tells React to only run this effect the first time the component is rendered */
    setProducts(["Clothing", "Household", "Pets"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
