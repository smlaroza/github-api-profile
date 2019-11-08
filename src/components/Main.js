import React from "react"
import Axios from "axios"
import { useGithub } from "../redux/ducks/exampleReducer"
import "../styles/styles.css"

export default function Main(props) {
  const { user, repos } = useGithub()
  return (
    <div className="profileContainer">
      <img className="selfie" src={user.avatar_url} />
      <div className="userTitle">
        <h1>{user.name}</h1>
      </div>
      <p className="userName">{user.login}</p>
      <button className="followButton">Follow</button>
      <div className="block">Block or report user</div>
    </div>
  )
}
