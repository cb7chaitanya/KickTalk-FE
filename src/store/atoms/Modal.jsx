import {atom} from 'recoil'

const postModalAtom = atom({
    key: 'postAtom',
    default: false
})

const communityModalAtom = atom({
    key: 'communityAtom',
    default: false
})

const profileModalAtom = atom({
    key: 'profileModalAtom',
    default: false
})

export {postModalAtom, profileModalAtom, communityModalAtom}