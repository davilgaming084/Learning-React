import React from 'react'
import { useSelector } from 'react-redux';
import AuthenticationService from '../../Appwrite/Authentication';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate()
  const logouthandle = () => {
    AuthenticationService.logOut().then((res) => {
      console.log(res);
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
      name: "about",
      url: '/about'
    }


  ]
  return (
    <>
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-3xl font-bold"> logo </div>
          <ul className="hidden md:flex space-x-6">
            {navitem.map((iten) =>
              <li key={iten.name}>
                <button className="hover:text-gray-400" onClick={() => navigate(iten.url)}> {iten.name}</button>
              </li>
            )}

            {isActive && (<li> <button>LogOut</button></li>)}
          </ul>
        </nav>
      </header>
    </>

  );
}

export default Header





