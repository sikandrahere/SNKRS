import React from 'react'
import { categoryItems, ProductDisplay, CustomerReview, FeaturedItems,BreadCrumb } from '../../components/index'
import { useParams } from 'react-router-dom'
import './SingleProduct.css'



const singleProduct = () => {
  const { id } = useParams();
  const product = categoryItems.find((item) => item.id === Number(id));
  const onClick = () => {
    window.scrollTo(0, 0);
  }
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="single-product">
      {/* breadcrumb */}
      <BreadCrumb product={product} />

      {/* product display */}
      <ProductDisplay product={product} />

      {/* product details */}
      <div className="product-details">
        <ul>
          <h3>Product info:</h3>
          <li>Declaration of Importer: Direct import by the individual customer</li>
          <li>Genuine and synthetic leathers provide superior durability and style.</li>
          <li>Padded tongue and inner upper for added comfort and security.</li>
          <li>Iconic winged Air Jordan logo on upper for traditional branding.</li>
        </ul>
      </div>

      {/* customer review */}
      <CustomerReview product={product} />

      {/* more like this */}

      <FeaturedItems heading={"You may also like this"} onClick={onClick} />

    </div>
  );
};

export default singleProduct