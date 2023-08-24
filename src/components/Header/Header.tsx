import React, {useState} from 'react';
import style from "./Header.module.scss"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import NavLinks from "./NavLinks/NavLinks";
import morty from "../img/morty.jpg"

const Header = () => {
  const [nav, setNav] = useState(false)

  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.box}>
          <div className={style.log_image}>
            <img className={style.logo} src={morty} alt=""/>
          </div>
          <NavLinks nav={nav} setNav={setNav}/>
          <div
            onClick={()=>setNav(prevState => !prevState)}
            className={style.mobile_btn}>
            {
              nav
                ? <AiOutlineClose size={25}/>
                : <AiOutlineMenu size={25}/>
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;