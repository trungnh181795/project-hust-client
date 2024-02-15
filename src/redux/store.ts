/* Libs */
import { MaybeNull } from '@/types'
import { configureStore, SerializedError, ThunkAction } from '@reduxjs/toolkit'
import {
  authReducer,
  fetchReducer,
  medicineReducer,
  userReducer,
  patientReducer,
  doctorReducer
} from '@/redux'
/* Reducers */
export interface Action<T = any> {
  type: T
}

export type BaseState = {
  loading: boolean
  error: MaybeNull<SerializedError>
  notification: MaybeNull<any>
}

export const makeStore = () =>
  configureStore({
    reducer: {
      fetchState: fetchReducer,
      authState: authReducer,
      medicineState: medicineReducer,
      patientState: patientReducer,
      userState: userReducer,
      doctorState: doctorReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
  })

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
