import { all, call, put, takeLatest } from "redux-saga/effects";
import { auth } from "../../firebase/firebase-utils";
import { errorHandler, signIn } from "./user-slice";

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

function* onSignInStart() {
  yield takeLatest("user/signInStart", signInSaga);
}

export default function* userSagas() {
  yield all([call(onSignInStart)]);
}
