import CategroyItem from "../category-item/categoryItem";
import "./directory.css";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategroyItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
