import { useMemo } from "react"
import { Link } from "react-router-dom"

export default function Header({cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart}) {
    const isEmpty = useMemo( () => cart.length === 0, [cart])
    const cartTotal = useMemo( () => cart.reduce( (total, item ) => total + (item.quantity * item.price), 0), [cart])
    return (
        <>
          <div>
            <div className="placeholder">
              <div
                className="parallax-window"
                data-parallax="scroll"
                data-image-src="https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_fpa6sn8vqc_empanadas.jpg"
              >
                <div className="tm-header">
                  <div className="row tm-header-inner align-items-center">
                    <div className="col-12 text-center">
                      <div className="tm-site-text-box">
                        <img className="tm-site-logo" src="/image-removebg-preview.png" alt="Logo de La Redonda Sabrosa" />
                        <h6 className="tm-site-description">Por la pelota y la Empanada.</h6>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="tm-header-bar">
                        <ul className="tm-nav-ul">
                          <li className="tm-nav-li">
                            <Link to="/" className="tm-nav-link">
                              Home
                            </Link>
                          </li>
                          <li className="tm-nav-li">
                            <Link to="/about" className="tm-nav-link">
                              Sobre Nosotros
                            </Link>
                          </li>
                          <li className="tm-nav-li">
                            <Link to="/contact" className="tm-nav-link">
                              Contacto
                            </Link>
                          </li>
                        </ul>
                        <div className="cart-icon">
                            <img src="/cart-icon.png" alt="Carrito" />
                            <div id="carrito" className="bg-white p-3">

                                {isEmpty ? (
                                    <p className="text-center">El carrito está vacío</p>
                                ) : (
                                    <>
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(guitar => (
                                                <tr key={guitar.id}>
                                                    <td>
                                                        <img className="img-fluid" src={guitar.image.startsWith('/') ? guitar.image : '/' + guitar.image + '.jpg'} alt="imagen guitarra" />
                                                    </td>
                                                    <td>{guitar.name}</td>
                                                    <td className="fw-bold">${guitar.price}</td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button type="button" className="btn btn-dark" onClick={() => decreaseQuantity(guitar.id)}>-</button>
                                                        {guitar.quantity}
                                                        <button type="button" className="btn btn-dark" onClick={() => increaseQuantity(guitar.id)}>+</button>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger" type="button" onClick={() => removeFromCart(guitar.id)}>X</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                
                                    <p className="text-end">Total a pagar: <span className="fw-bold">${cartTotal}</span></p>
                                </>
                                )}
                                <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Vaciar Carrito</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

    )
}