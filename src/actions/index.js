import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'http://jondgonzalez-blog-server.herokuapp.com/';
const API_KEY = '?key=J_Gonzalez';

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
    .then(response => {
      dispatch({ type: 'FETCH_POSTS', payload: { posts: response.data } });
    })
    .catch(error => {

    });
  };
}

export function createPost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post)
   .then(response => {
     browserHistory.push('/');
   })
   .catch(error => {

   });
  };
}


export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(response => {
      dispatch({ type: 'FETCH_POST', payload: { post: response.data } });
    })
    .catch(error => {
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post)
    .then(response => {
      dispatch(fetchPost(id));
    })
    .catch(error => {

    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(response => {
      browserHistory.push('/');
    })
    .catch(error => {

    });
  };
}
