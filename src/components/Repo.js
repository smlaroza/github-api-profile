import React from "react"
import axios from "axios"
import { useGithub } from "../redux/ducks/exampleReducer"
import "../styles/styles.css"
import Moment from "react-moment"

export default function Main(props) {
  const { user, repos } = useGithub()
  return (
    <div className="tlinksHeader">
      <div className="topLinks">
        <p>Overview</p>
        <p className="repoCount">
          Repositories <div className="count">{user.public_repos}</div>
        </p>
        <p>
          Projects <div className="count">{user.followers}</div>
        </p>
        <p>
          Packages<div className="count">{user.followers}</div>
        </p>
        <p>
          Stars<div className="count">{user.followers}</div>
        </p>
        <p>
          Followers<div className="count">{user.followers}</div>
        </p>
        <p>
          Following<div className="count">{user.followers}</div>
        </p>
      </div>

      <div className="rsearchOpt">
        <input
          className="actualrepoSearch"
          type="text"
          placeholder="Find a repository..."
        ></input>
        <button className="type">Type: All</button>
        <button className="languageButton">Language: All</button>
      </div>

      <div className="repoContainer">
        {repos.map((repo) => {
          return (
            <div className="repName" key={repo.id}>
              <a href={repo.clone_url}>{repo.name}</a>

              <div className="langTime">
                <div className="language">{repo.language}</div>
                <div className="time">
                  Updated
                  <Moment id="space" fromNow>
                    {repo.updated_at}
                  </Moment>
                </div>
              </div>
              <button className="starButton">&#9733; Star</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
