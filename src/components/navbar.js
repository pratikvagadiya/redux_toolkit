import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const navigate = useNavigate();
    let data = localStorage.getItem('data');

    const items = useSelector((state) => state.cart)

    const handleLogout = () => {
        localStorage.removeItem('data')
        navigate('/')
    }

    return (
        <>
            <div className="navbar_line">
                <span>REDUX STORE</span>
                <div>
                    {data ?
                        <div>
                            <Link to='/home' className="navbar" >Home</Link>
                            <Link to='/cart' className="navbar">Cart</Link>
                            <span>Cart items: {items.length}</span>
                        </div>
                        : null}
                </div>
                <div className='logout'>
                    {data ? <button onClick={handleLogout}>Log Out</button> : null}
                </div>

            </div>
        </>
    )
}
export default Navbar;