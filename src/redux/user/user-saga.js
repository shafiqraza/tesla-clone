import { all, call, put, takeLatest } from "redux-saga/effects";
import { auth, getCurrentUser } from "../../firebase/firebase-utils";
import { errorHandler, signIn, signOut } from "./user-slice";

function* signInSaga(action) {
  const {
    payload: { email, password },
  } = yield action;
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield put(
      signIn({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
      })
    );
  } catch (e) {
    yield put(
      errorHandler({
        type: "signIn",
        message: e.message,
      })
    );
  }
}

function* signUpSaga(action) {
  const { displayName, email, password } = yield action.payload;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield user.updateProfile({ displayName });
    yield put(signIn({ email, displayName, uid: user.uid }));
  } catch (e) {
    yield put(
      errorHandler({
        type: "signUp",
        message: e.message,
      })
    );
  }
}

function* signOutSaga() {
  yield console.log("signOutSaga");
  try {
    yield auth.signOut();
    yield put(signOut());
  } catch (e) {
    yield put(errorHandler({ type: "signOut", message: e.message }));
  }
}

function* authCheckSaga(action) {
  try {
    const authUser = yield call(getCurrentUser);
    if (authUser) {
      const { displayName, email, uid } = yield authUser;
      yield put(signIn(email, displayName, uid));
    } else {
      yield put(signOut());
    }
  } catch (e) {
    yield put(
      errorHandler({
        type: "authCheck",
        message: e.message,
      })
    );
  }
}

// action listeners

function* onAuthCheck() {
  yield takeLatest("user/authCheck", authCheckSaga);
}

function* onSignInStart() {
  yield takeLatest("user/signInStart", signInSaga);
}

function* onSignUpStart() {
  yield takeLatest("user/signUpStart", signUpSaga);
}

function* onSignOutStart() {
  yield takeLatest("user/signOutStart", signOutSaga);
}

export default function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignUpStart),
    call(onSignOutStart),
    call(onAuthCheck),
  ]);
}
