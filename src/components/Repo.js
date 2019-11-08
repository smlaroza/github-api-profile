import React from "react"
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
      <div className="nextPage">
        <button className="prevButton">Previous</button>
        <button className="nextButton">Next</button>
      </div>
      <footer className="foot">
        <p>&copy;2019 Github, Inc.</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
        <p>Status</p>
        <p>Help</p>
        {/* <div className="footLogo">
          <Icon icon="github"></Icon>
        </div> */}
        <p>Contact GitHub</p>
        <p>Pricing</p>
        <p>API</p>
        <p>Training</p>
        <p>Blog</p>
        <p>About</p>
      </footer>
    </div>
  )
}
