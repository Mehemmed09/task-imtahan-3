// import React, { useContext } from 'react'
// import { BasketContext } from '../../context/Context'

// const Card = ({image,text,title,image2,text2,title2,price,product}) => {
// const{AddBasket}=useContext(BasketContext)
//   return (
//     <>
//  <div class="card" style={{width:"18rem"}}>
//  <img className='card-image-top' src={image} alt="Card image cap" />
//   <div class="card-body">
//     <h5 class="card-title">{title}</h5>
//     <p class="card-text">{text}</p>
//     <div className="card-footer">
//     <img className='card-image-footer' src={image2} alt="Card image cap" />
//     <h5 class="card-title">{title2}</h5>
//     <p class="card-text">{text2}</p>
//     <span>{price}</span>
//     </div>
//     <div className="card-button">
//         <button onClick={()=>AddBasket(product)}>Add To Basket</button>
//     </div>
//   </div>
// </div>
//     </>
//   )
// }

// export default Card