import { useState, useEffect } from "react";

export const CategoriesHook = (notes) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const category = notes.map((item) => item.alter);
    setCategories(category);
  }, [notes]);

  const categoriesPanel = [...new Set(categories)];
  return [categoriesPanel];
};
