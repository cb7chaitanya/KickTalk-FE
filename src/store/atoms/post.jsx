import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export const postAtom = atom({
    key: "postAtom",
    default: [],
})