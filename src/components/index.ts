// Реэкспорт, чтобы экспортировать можно было и из этого файла

// Можно сделать так, но это не круто
// import Skeleton from "./PizzaPlock/Skeleton"
// export {
//   Skeleton
// }

// В ES6 лучше сделать так
// export { default as NotFoundBlock } from './NotFoundBlock';
// Или Barrel export
export * from './PizzaPlock/Skeleton';
export * from './PizzaPlock';
export * from './Header';
export * from './Categories';
export * from './CartItem';
export * from './CartEmpty';
export * from './Search';
export * from './Sort';
export * from './Pagination';
export * from './NotFoundBlock';
