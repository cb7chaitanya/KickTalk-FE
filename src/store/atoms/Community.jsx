import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
const {persistAtom} = recoilPersist()

export const communityAtom = atom({
    key: "communityAtom",
    default: [],
    effects_UNSTABLE: [persistAtom]
})