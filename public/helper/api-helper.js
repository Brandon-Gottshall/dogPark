import axios from 'axios'
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://dogpark-backend.herokuapp.com' : 'http://localhost:3000'
});

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}


export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}


// ====================================
// ============= Resources ================
// ====================================

export const getMyTeamAndProjects = async () => {
  const resp = await api.get('/users/1/team');
  return resp.data;
}

export const getTeamUpdates = async () => {
  const resp = await api.get('/updates');
  return resp.data;
}
