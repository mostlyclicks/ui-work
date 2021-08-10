import React, { Fragment } from 'react'

const Nav1 = (props) => {

  const navLinks = props.navLinks
  console.log(navLinks)


  return (
    <Fragment>
      <h2>Navigation 1</h2>
      <ul>
        {navLinks.map((navLink, index) => (
          <li key={index}><a href={navLink.urlPath}>{navLink.linkName}</a></li>
        ))}

      </ul>
      
    </Fragment>
  )
}

export default Nav1
