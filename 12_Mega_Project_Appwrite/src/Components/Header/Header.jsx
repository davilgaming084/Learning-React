import React from 'react'
import Container from '../Container/Container'
import Logo from '../logo'
import Logoutbtn from './Logoutbtn'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Header = () => {

  const authstatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navitem = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authstatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authstatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authstatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authstatus,
    },
  ]
  return (
    <header>
      <Container>
        <nav>
          <div>
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>


          <ul>
            {navitem.map((item) =>

              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}>{item.name}</button>
                </li>
              ) : null)}

            {authstatus && (
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header