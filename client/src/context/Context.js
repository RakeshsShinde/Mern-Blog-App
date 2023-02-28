import { createContext, useEffect, useReducer } from 'react'

import reducer from './Reducer'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}


export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({ children }) => {


    //
    // const [posts, setposts] = useState([]);


    // useEffect(() => {
    //     const fetchposts = async () => {
    //         const res = await axios.get("/posts")
    //         setposts(res.data);
    //     }
    //     fetchposts()
    // }, [])


    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])


    // const [postState, postDispatch] = useReducer(postReducer, {
    //      posts:posts,
    //     SerachQuery: " ",
    // })







    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
            // postState,
            // postDispatch,
        }}>
            {children}
        </Context.Provider>
    )
}