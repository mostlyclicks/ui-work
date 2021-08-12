import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

const Nav1 = (props) => {

  const navLinks = props.navLinks
 
  return (
    <Fragment>
      <StyledUl>
        <header>&times;</header>
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
 justify-content:flex-end;
 align-items:center;
 flex-direction:column;
 width:100%;
 margin:0;
 padding:0;
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
   
   width:100%;
   padding-right:60px;
   padding-top:15px;
   
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
