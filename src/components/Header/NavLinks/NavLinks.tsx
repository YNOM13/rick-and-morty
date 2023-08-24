import React from 'react';
import {NavLink} from "react-router-dom";
import styleLinks from "../Header.module.scss";
import navLink from "./NavLinks.module.scss"

interface ISetNav {
  setNav:React.Dispatch<React.SetStateAction<boolean>>,
  nav:boolean,
}

const navElements:string[] = ["Characters", "Episodes", "Locations",  "My watch list"]

const NavLinks = ({nav,setNav}:ISetNav) => {

  const deleteSpacesBetweenWordsInLink = (str:string):string => {
    return str.split(' ').join('')
  }

  return (
    <ul className={nav ? [styleLinks.menu, styleLinks.active].join(' ') : [styleLinks.menu].join(' ')}>
      {navElements.map((linkText,ind)=>
        <NavLink
              className={(dataStyle)=>dataStyle.isActive ? navLink.activeLink : navLink.defaultLink}
              onClick={()=>setNav(prev => !prev)}
              key={ind}
              to={`/${deleteSpacesBetweenWordsInLink(linkText)}`}>
          {linkText}
        </NavLink>)
      }
    </ul>
  );
};
export default NavLinks;
