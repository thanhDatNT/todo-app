import {applyMiddleware, configureStore, Dispatch, EnhancedStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import createSagaMiddleware, {SagaMiddleware} from "redux-saga";
import {rootSaga} from "./rootSaga";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: EnhancedStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    },
);

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ():Dispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;