// import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';

// const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
//   const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   const isCartEmpty = cart.length === 0;

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4 ">Shopping Cart</h2>
//       {isCartEmpty ? (
//         <p style={{ fontSize: '1.2rem', color:'#999',textAlign:'center', marginTop:'20px'}}>Your cart is empty</p>
//       ) : (
//         <>
//           {cart.map(item => (
//             <div className="card mb-3" key={item.id}>
//               <div className="card-body">
//                 <div className="row align-items-center">
//                   <div className="col-md-2">
//                     <img src={item.thumbnail} alt={item.name} className="img-fluid" />
//                   </div>
//                   <div className="col-md-4">
//                     <h5>{item.name}</h5>
//                     <p className="text-muted">Price: ${item.price.toFixed(2)}</p>
//                   </div>
//                   <div className="col-md-4">
//                     <div className="input-group">
//                     <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
//                   onClick={() => decrementQuantity(item.id)}>
//                   <FontAwesomeIcon icon={faMinus}/>
//                 </button>
//                       <input id="form1" min="0" name="quantity"  type="number" className="form-control form-control-sm" value={item.quantity}  />
//                       <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2" onClick={() => incrementQuantity(item.id)}><FontAwesomeIcon icon={faPlus}/></button>
//                     </div>
//                   </div>
//                   <div className="col-md-2 text-end">
//                     <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//                     <FontAwesomeIcon icon={ faTrash} style={{color: '#e90c0c'}} onClick={() => removeFromCart(item.id)}></FontAwesomeIcon>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
        //   <div className="row">
        //     <div className="col">
        //       <h4>Total Quantity: {totalQuantity}</h4>
        //     </div>
        //     <div className="col">
        //       <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        //     </div>
        //   </div>
        //   <div className="row mt-3">
        //     <div className="col">
        //       <button className="btn btn-success">Checkout</button>
        //     </div>
        //   </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  // Calculate total price and total quantity
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const isCartEmpty = cart.length === 0;

  return (
    <section className="h-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-center align-items-center  mb-4">
              <h3 className="  fw-normal mb-0 text-black text-center   ">Shopping Cart</h3>
            </div>
            {isCartEmpty ? (
        <p style={{ fontSize: '1.2rem', color:'#999',textAlign:'center', marginTop:'20px'}}>Your cart is empty</p>
      ) : (
        <>
            {cart.map(item => (
              <div className="card rounded-3 mb-4" key={item.id}>
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img src={item.thumbnail} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                     
                      <p><span className="text-muted">{item.title} </span> </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                  onClick={() => decrementQuantity(item.id)}>
                  <FontAwesomeIcon icon={faMinus}/>
                </button>
                      <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                       <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2" onClick={() => incrementQuantity(item.id)}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <FontAwesomeIcon icon={ faTrash} style={{color: '#e90c0c'}} onClick={() => removeFromCart(item.id)}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            ))}
             <div className="row">
            <div className="col">
              <h4>Total Quantity: {totalQuantity}</h4>
            </div>
            <div className="col">
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <button className="btn btn-success">Checkout</button>
            </div>
          </div>
              </>
               )}
          </div>
        
       
        </div>
      </div>
        
    </section>
  );
};

export default Cart;

