import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    error: null,
    loading: false,
    username: null,
    isAuthenticated: false,
    token: null,
  },
  reducers: {
    authStart: (state) => {
      state.error = null;
      state.loading = true;
      state.username = null;
      state.isAuthenticated = false;
      state.token = null;
    },
    authSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.username = action.payload.username;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    authFail: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
      state.isAuthenticated = false;
      state.username = null;
      state.token = null;
    },
    authSignout: (state) => {
      state.username = null;
      state.error = null;
      state.loading = false;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

// Supposedly async functions
export const signin = (data) => (dispatch) => {
  authenticate(data, dispatch);
};

export const signup = (data) => (dispatch) => {
  authenticate(data, dispatch);
};

export const signout = () => (dispatch) => {
  dispatch(authSignout());
};

const authenticate = (data, dispatch) => {
  dispatch(authStart());
  const userInfoJSON = JSON.stringify(data);

  // Assume this could throw error, simulate a call to database
  try {
    localStorage.setItem(data.username, userInfoJSON);
    localStorage.setItem('token', userInfoJSON);
    dispatch(authSuccess({ username: data.username, token: userInfoJSON }));
  } catch (err) {
    dispatch(authFail(err));
  }
};

export const validateExistingToken = () => (dispatch) => {
  const tokenValue = localStorage.getItem('token');
  console.log(tokenValue);
  if (tokenValue) {
    const user = JSON.parse(tokenValue);
    console.log(user);
    dispatch(authSuccess({ username: user.username, token: tokenValue }));
  } else {
    dispatch(authSignout());
  }
};

// Exports actions
export const {
  authStart,
  authSuccess,
  authFail,
  authSignout,
} = authSlice.actions;

// Exports auth states
export const selectAuthState = (state) => state.auth;

// Export default authSlice reducer
export default authSlice.reducer;
