import React from 'react';
// import { useWhyDidYouUpdate } from 'ahooks';

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
  // С вопросительным знаком это опциональная функция
  // getCategories?: (categories: string[]) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

// Использую React.memo для предотвращения перерисовок если не поменялись пропсы
const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  // Вопрос с точкой (?.) нужен чтобы не ломался код если опциональной функции нет
  // getCategories?.(categories)

  // Юзал библиотеку для определения из-за какого пропса перерендеривается компонент
  // useWhyDidYouUpdate('Categories', { value, onChangeCategory });

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
});
export default Categories;
