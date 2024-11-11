import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AuthenticationService from '../../Appwrite/Authentication';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../Store/Features/Authentication_slice"
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logouthandle = () => {
    AuthenticationService.logOut().then((res) => {
      console.log(res);
      dispatch(logout())
    })
  }

  const isActive = useSelector((state) => state.authentication.status)
  const navitem = [
    {
      name: "Home",
      url: '/',
      active: true
    },
    {
      name: 'login',
      url: 'login',
      active: !isActive

    },
    {
      name: 'contect',
      url: "/contect"
    },
    {
      name: "About",
      url: '/About'
    }


  ]
  return (
    <>
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-3xl font-bold"> <img src="https://media.istockphoto.com/id/1180200398/vector/flat-black-newspaper-vector-icon.jpg?s=612x612&w=0&k=20&c=ld9W345s2DIg9tZOZcpdiwSkEe35gv_8levLNpm2cQk=" alt=""  style={{height:"70px"}}/> Arical hub </div>
          <ul className="hidden md:flex space-x-6">
            {navitem.map((iten) =>
              <li key={iten.name}>
                <button className="hover:text-gray-400" onClick={() => navigate(iten.url)}> {iten.name}</button>
              </li>
            )}

            {isActive && (<li> <button onClick={logouthandle}>LogOut</button></li>)}
          </ul>
        </nav>
      </header>
    </>

  );
}

export default Header





