import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store: EnhancedStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
    }
);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;