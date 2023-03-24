// authService.ts

import { authHeader } from '../helpers/auth-header';
import { User } from '@/src/functions/types';

const apiUrl = process.env.REACT_APP_API_URL;

export const authService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

function login(email: string, password: string, role: string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, role })
  };

  return fetch(`/api/auth/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(user: User) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${apiUrl}/auth/register`, requestOptions).then(handleResponse);
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  //return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id: number) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  //return fetch(`${apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function update(id: number, data: any) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

  //return fetch(`${apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

// prefixed with underscore because delete is a reserved word in javascript
function _delete(id: number) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  //return fetch(`${apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

async function handleResponse(response: Response) {

  const isJson = response.headers?.get('content-type')?.includes('application/json');
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    if ([401, 403].includes(response.status)) {
      // auto logout if 401 response returned from api
      logout();
      location.reload();
    }
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
}
