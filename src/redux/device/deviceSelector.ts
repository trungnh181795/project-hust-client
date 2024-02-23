import type { RootState } from '@/redux/store'
import { DeviceState } from '@/redux'
// Other code such as selectors can use the imported `RootState` type
export const selectDevice = (state: RootState) =>
  state.deviceState as DeviceState
