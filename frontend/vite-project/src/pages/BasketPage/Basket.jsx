// import React, { useContext } from 'react';
// import { BasketContext } from '../../context/Context';
// const Basket = () => {  
//   const { basket, DeleteBasket, increaseBasket, decreaseBasket,} =useContext(BasketContext);
//   return (
//     <div>
//       {basket.length > 0 ? (
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Image</th>
//               <th scope="col">Text</th>
//               <th scope="col">Title</th>
//               <th scope="col">Image2</th>
//               <th scope="col">Text2</th>
//               <th scope="col">Title</th>
//               <th scope="col">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {basket.map((x) => (
//               <tr key={x._id}>
//                 <td>
//                   <img src={x.image} alt="" width="60px" />
//                 </td>
//                 <td>{x.text}</td>
//                 <td>{x.title}</td>
//                 <td>{x.image2}</td>
//                 <td>{x.text2}</td>
//                 <td>{x.title2}</td>
//                 <td>{x.price}</td>
//                 <td>
//                   <button className="btn btn-danger" onClick={() => DeleteBasket(x._id)}>
//                     Delete
//                   </button>
//                   <button className="btn btn-primary" onClick={() => decreaseBasket(x._id)}>
//                     -
//                   </button>
//                   <p>{x.count}</p>
//                   <button className="btn btn-primary" onClick={() => increaseBasket(x._id)}>
//                     +
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No items in basket</p>
//       )}
//     </div>
//   );
// };

// export default Basket;
