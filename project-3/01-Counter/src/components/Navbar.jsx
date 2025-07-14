import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <section>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Mission">Mission</NavLink>
        <NavLink to="/Product">Product</NavLink>
     </section> 
    </>
  )
}

export default Navbar
