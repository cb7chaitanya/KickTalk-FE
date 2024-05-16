import {atom} from 'recoil'

const postModalAtom = atom({
    key: 'postModalAtom',
    default: false
})

const communityModalAtom = atom({
    key: 'communityModalAtom',
    default: false
})

const profileModalAtom = atom({
    key: 'profileModalAtom',
    default: false
})

export {postModalAtom, profileModalAtom, communityModalAtom}