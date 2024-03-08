import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryList() {

    const params = useParams();

  return (
    <>
        <h1>Category List</h1>
        <p>Category Name: {params.categoryName}</p>
    </>
  )
}

export default CategoryList