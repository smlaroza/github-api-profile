import React from "react"
import Icon from "../lib/Icon"
import { useGithub } from "../redux/ducks/exampleReducer"

export default function Header() {
  const { user } = useGithub()
  return (
    <div className="headerTop">
      <div className="logo">
        <Icon icon="github"></Icon>
      </div>
      <input
        className="searchButton"
        type="text"
        placeholder="Search or jump to..."
      ></input>
      <div className="headertopLinks">
        <p>Pull requests</p>
        <p>Issues</p>
        <p>Marketplace</p>
        <p>Explore</p>
      </div>

      <div className="icons">
        <Icon icon="bell"></Icon>
        <Icon icon="plus"></Icon>
        <Icon icon="sort-down"></Icon>
        <div className="iconPhoto">
          <img className="selfieTwo" width="20px" src={user.avatar_url} />
          <Icon icon="sort-down"></Icon>
        </div>
      </div>
    </div>
  )
}
