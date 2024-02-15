import { BaseData } from "@/types";

export enum MedicineCategory {
    CAPSULE = 'capsule',
    INJECTION = 'injection',
    PILL = 'pill'
}

export type MedicineData = BaseData & {
    name: string
    expireAt: string
    price: number
    category: MedicineCategory
}