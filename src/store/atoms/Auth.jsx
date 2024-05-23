import {atom} from "recoil"
import { recoilPersist } from "recoil-persist"
const { persistAtom } = recoilPersist()

export const userAtom = atom({
    key: "userAtom",
    default: false,
}) 

const authAtom = atom({
    key: "authAtom",
    default: false,
    effects_UNSTABLE: [persistAtom]
})

export default authAtom