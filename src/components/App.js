import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import Header from "./Header"
import Main from "./Main"
import Repo from "./Repo"
import "../styles/styles.css"

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="repoArea">
        <Main />
        <Repo />
      </div>
    </Provider>
  )
}

export default App
