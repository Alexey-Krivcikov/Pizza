import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaPlock';
import Skeleton from '../components/PizzaPlock/Skeleton';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
import { fetchPizzas } from '../redux/pizza/asyncActions';
import { selectPizzaData } from '../redux/pizza/selectors';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  // const navigate = useNavigate();
  // const isSearch = React.useRef(false);
  // const isMounted = React.useRef(false);
  const dispatch = useAppDispatch();
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  // Использую useCallback чтобы не пересоздавать функцию при перерисовках компонента Home
  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  // Если изменили параметры и был первый рендер
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });
  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, currentPage]);

  // // Если был первый рендер, то проверяем URL-парамтры и сохраняем в Redux
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       }),
  //     );
  //   }
  //   isSearch.current = true;
  // }, []);

  // Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    // if (!isSearch.current) {
    getPizzas();
    // }
    // isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort value={sort} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>произошла ошибка</h2>
            <p>К сожалению не удалось получить питсы. Попробуйте повторить попытку позже</p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
        )}

        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
