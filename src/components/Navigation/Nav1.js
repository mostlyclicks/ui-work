import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

const Nav1 = (props) => {

  const navLinks = props.navLinks

  const [navOpen, setNavOpen] = useState(false)

  const handleClose = () => {
    setNavOpen(false)
    console.log('header clicked')
    console.log(window.innerWidth)
  }
 
  return (
    <Fragment>
      <StyledUl>
        <header onClick={handleClose}>&times;</header>
        {navLinks.map((navLink, index) => (
          <li key={index}><a href={navLink.urlPath}>{navLink.linkName}</a></li>
        ))}
      </StyledUl>
    </Fragment>
  )
}

export default Nav1


const StyledUl =  styled.ul`
 display:flex;
 transform: translateY(-270px);
 background-color:#ffffff;
 justify-content:flex-end;
 align-items:center;
 flex-direction:column;
 width:100%;
 margin:0;
 padding:0;
 padding-bottom:.5rem;
 list-style:none;
 li {
   display:flex;
   width:90%;
   border-bottom:1px solid #cdcdcd;
   &:last-child{border-bottom:1px solid transparent;}
   a {
     display:block;
     width:100%;
     padding:1rem;
     text-align:center;
   }
 }

 header {
   display:flex;
   font-size:2rem;
   font-weight:bold;
   justify-content:flex-end;
   cursor:pointer;
   
   width:100%;
   padding-right:60px;
   padding-top:15px;
   &:hover {color:red;}
   &:active {color:#cdcdcd;}
   
 }
 
 @media (min-width:768px) {
   flex-direction:row;
   li {
     border:none;
     width:auto;
     a {
       padding:1rem 2rem;
     }
   }
   header {
     display:none;
   }
 }

`
