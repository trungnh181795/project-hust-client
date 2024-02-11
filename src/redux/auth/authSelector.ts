import type { RootState } from '@/redux/store'
import { AuthState } from './authSlice'
// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.authState as AuthState
