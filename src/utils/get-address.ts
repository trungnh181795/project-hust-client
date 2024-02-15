import { UserAddress } from "@/types";

export const getAddress = (address: UserAddress): string => {
    return `${address?.location} - ${address?.ward} - ${address?.district}- ${address?.province}`
}