import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const {persistAtom} = recoilPersist()

export const postAtom = atom({
    key: "postAtom",
    default: [],
})

export const userPostAtom = atom({
    key: "userPostAtom",
    default: [],
    effects_UNSTABLE: [persistAtom]
})

export const commentAtom = atom({
    key: "commentAtom",
    default: []
})