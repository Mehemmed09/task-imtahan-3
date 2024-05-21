// import React, { useEffect, useState } from 'react';
// import '../CardSection/Section.scss'
// import Card from '../Card/Card';
// import axios from 'axios';
// function Products() { 
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Mallar gelmedi:', error.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []); 

//   return (
//     <div > 
//       {loading ? (
//         <p>Mallar yuklenir...</p>
//       ) : (
//         <div className='cards'>
//          {products && products.map((item) => (
//                             <Card key={item._id} id={item._id} image={item.image} teitemt={item.teitemt} title={item.title} product={item} />
//                         ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Products;
