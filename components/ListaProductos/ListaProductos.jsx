import React from 'react';
import Card from '../Card/Card';

const ListaProductos = (burger) => {

  return (
    <>
      <div className="grid grid-cols-4 mx-12 my-20">
        <div>gola</div>
        {/* {
          burgersList.map((item, i) => (
            <Card key={item.id} />
          ))
        } */}
      </div>
    </>
  );
};

export default ListaProductos;