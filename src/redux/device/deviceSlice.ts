import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MaybeNull } from '@/types/common'
import { DeviceData } from '@/types'

export type DeviceState = {
  devices: MaybeNull<DeviceData[]>
  deviceDetail: MaybeNull<DeviceData>
}

const initialState: DeviceState = {
  deviceDetail: null,
  devices: null,
}

export const deviceSlice = createSlice({
  name: 'deviceState',
  initialState,
  reducers: {
    setDevices: (state, action: PayloadAction<DeviceData[]>) => {
      state.devices = action.payload
    },
    setDeviceDetail: (state, action: PayloadAction<DeviceData>) => {
      state.deviceDetail = action.payload
    },
  },
})

export const { setDeviceDetail, setDevices } = deviceSlice.actions

export default deviceSlice.reducer
