import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }
    ));
}
