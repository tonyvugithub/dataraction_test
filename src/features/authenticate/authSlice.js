import { createSlice } from '@reduxjs/toolkit';
import bcrypt from 'bcryptjs';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    error: null,
    loading: false,
    username: null,
    token: null,
  },
  reducers: {
    authStart: (state) => {
      state.error = null;
      state.loading = true;
      state.username = null;
      state.token = null;
    },
    authSuccess: (state, action) => {
      state.error = null;
      state.loading = false;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    authFail: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
      state.username = null;
      state.token = null;
    },
    authSignout: (state) => {
      state.username = null;
      state.error = null;
      state.loading = false;
      state.token = null;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

// Supposedly async functions
export const signin = (data) => (dispatch) => {
  dispatch(authStart());
  setTimeout(async () => {
    try {
      // This simulate a check to server to see if there is a user
      const user = JSON.parse(localStorage.getItem(data.username));

      if (!user) {
        throw new Error('Invalid credentials!');
      }

      // Compare the password
      const match = await bcrypt.compare(data.password, user.password);

      // Assume this could throw error, simulate a call to database
      if (match) {
        const userInfoJSON = JSON.stringify(user);

        // Simulate response time of 1500 ms
        dispatch(authSuccess({ username: data.username, token: userInfoJSON }));

        localStorage.setItem('token', userInfoJSON);
      } else {
        throw new Error('Invalid credentials!');
      }
    } catch (err) {
      dispatch(authFail({ error: err.message }));
    }
  }, 1500);
};

export const signup = (data) => (dispatch) => {
  dispatch(authStart());
  setTimeout(() => {
    // This simulate a check to server to see if there is a user
    const userInfoFromDb = localStorage.getItem(data.username);

    // Assume this could throw error, simulate a call to database
    try {
      if (userInfoFromDb) {
        throw new Error('User already exist!');
      } else {
        // Hash the password and store into database
        bcrypt.hash(data.password, 12, (err, hash) => {
          const saveData = {
            username: data.username,
            password: hash,
          };

          const userInfoJSON = JSON.stringify(saveData);

          // Simulate response time of 1500 ms

          dispatch(
            authSuccess({ username: data.username, token: userInfoJSON })
          );
          localStorage.setItem(data.username, userInfoJSON);
          localStorage.setItem('token', userInfoJSON);
        });
      }
    } catch (err) {
      dispatch(authFail({ error: err.message }));
    }
  }, 1500);
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(authSignout());
};

export const validateExistingToken = () => (dispatch) => {
  const tokenValue = localStorage.getItem('token');
  if (tokenValue) {
    const user = JSON.parse(tokenValue);
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
  resetError,
} = authSlice.actions;

// Exports auth states
export const selectAuthState = (state) => state.auth;

// Export default authSlice reducer
export default authSlice.reducer;
