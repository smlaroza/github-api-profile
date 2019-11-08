import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

//action names
const GET_USER = "GET_USER"
const GET_REPOS = "GET_REPOS"

//reducer
const initialState = {
  user: {},
  repos: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload }
    case "GET_REPOS":
      return { ...state, repos: action.payload }
    default:
      return state
  }
}

//custom hooks
export function useGithub() {
  const dispatch = useDispatch()
  const user = useSelector((appState) => appState.exampleReducer.user)
  const repos = useSelector((appState) => appState.exampleReducer.repos)

  useEffect(() => {
    dispatch(getUser())
    dispatch(getRepos())
  }, [])
  return { user, repos }
}

//actions

function getUser() {
  return (dispatch) => {
    Axios.get("https://api.github.com/users/smlaroza").then((resp) => {
      dispatch({
        type: "GET_USER",
        payload: resp.data
      })
    })
  }
}
function getRepos() {
  return (dispatch) => {
    Axios.get("https://api.github.com/users/smlaroza/repos").then((resp) => {
      dispatch({
        type: "GET_REPOS",
        payload: resp.data
      })
    })
  }
}
