import type { RootState } from '@/redux/store'
import { UserState } from '@/redux'
// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.userState as UserState
