import type { RootState } from '@/redux/store'
import { FetchState } from '@/redux'
// Other code such as selectors can use the imported `RootState` type
export const selectFetch = (state: RootState) => state.fetchState as FetchState
