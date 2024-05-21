// import React, { createContext } from 'react'
// import useLocalStorage from '../hooks/UseLocalStorage'
// export const BasketContext=createContext()
// const BasketProvider = ({children}) => {

//     const [basket,setBasket] =useLocalStorage('basket')
//     //Add basket

//     function AddBasket (product){
// const productExists =basket.findIndex(x=>x._id===product._id)
// if(productExists===-1){    
// setBasket([...basket,{...product}])
// }
// }

// //delete

// function DeleteBasket(product){
//     const DeleteFromBasket=basket.filter(x=>x._id===product._id)
//     setBasket(DeleteFromBasket)

// }
// function IncreaseBasket (product_id)  {
//     const DeleteFromBasket = basket.map((x) => {
//       if (x._id === product_id) {
//         const newCount = (x.count || 0) + 1; 
//         return { ...x, count: newCount };
//       }
//       return item;
//     });
//     setBasket(DeleteFromBasket);
//   };
//   const decreaseBasket = (product_id) => {
//     const DeleteFromBasket = basket.map((x) => {
//       if (x._id === product_id && x.count > 1) {
//         const newCount = (x.count || 0) - 1; 
//         return { ...x, count: newCount };
//       }
//       return item;
//     }).filter((x) => x.count !== undefined); 
//     setBasket(DeleteFromBasket);
//   };

// const data ={
//     basket,setBasket,AddBasket,DeleteBasket,IncreaseBasket,decreaseBasket
// }
//   return (
// <>
// <BasketProvider value={data}>
//     {children}
// </BasketProvider>
// </> 
//  )
// }

// export default BasketProvider