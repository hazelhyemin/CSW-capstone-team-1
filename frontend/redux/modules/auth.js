// import
import UserInfo from "../../assets/UserInfo";
import { AsyncStorage, Alert } from "react-native";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

// action creators
function setLogIn(username, password) {
  return {
    type: LOG_IN,
    username,
    password
  };
}

function logout() {
  return {
    type: LOG_OUT
  };
}

function signup(username, password) {
  return dispatch => {};
}

// api actions

function login(username, password) {
  return dispatch => {
    let check = false;
    UserInfo.map(user => {
      if (username === user.id && password === user.password) {
        dispatch(setLogIn(username, password));
        check = true;
      } 
    });
    if(!check) {
      Alert.alert("ID/PW 오류","아이디나 비밀번호가 정확하지 않습니다.");
    }
  };
} 

// initialState
const defaultState = {
};

// reducer
function reducer(state = defaultState, action) {
  switch (action.type) {
    case LOG_IN:
      return applySetLogIn(state, action);
    case LOG_OUT:
      return applySetLogOut(state, action);
    default:
      return state;
  }
}

// reducer actions
function applySetLogIn(state, action) {
  const { username } = action;
  AsyncStorage.setItem("username",username);
  return {
    ...state,
    username,
    isLoggedIn: true,
  };
}

function applySetLogOut(state, action) {
  AsyncStorage.clear();
  
  return {
    ...state,
    isLoggedIn: false,
    username: ""
  };
}

// exports
const actionCreators = {
  login,
  logout,
  signup
};

export { actionCreators };

export default reducer;
