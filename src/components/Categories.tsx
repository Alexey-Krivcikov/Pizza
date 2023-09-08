import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
  // С вопросительным знаком это опциональная функция
  // getCategories?: (categories: string[]) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  // Вопрос с точкой (?.) нужен чтобы не ломался код если опциональной функции нет
  // getCategories?.(categories)

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
