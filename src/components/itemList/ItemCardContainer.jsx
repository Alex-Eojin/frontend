import React from 'react';
import ItemCard from './ItemCard';

const ItemCardContainer = () => {
  return (
    <div className="w-p-1050  mx-auto">
      <ul className="flex flex-wrap">
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
      </ul>
    </div>
  );
};

export default ItemCardContainer;
