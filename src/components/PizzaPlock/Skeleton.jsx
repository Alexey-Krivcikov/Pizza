import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="137" cy="133" r="125" />
    <rect x="0" y="271" rx="10" ry="10" width="280" height="17" />
    <rect x="-1" y="306" rx="10" ry="10" width="280" height="88" />
    <rect x="4" y="415" rx="10" ry="10" width="95" height="34" />
    <rect x="125" y="408" rx="22" ry="22" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
