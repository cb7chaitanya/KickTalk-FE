const signUpEndpoint = import.meta.env.VITE_SIGNUP_API
const signInEndpoint = import.meta.env.VITE_SIGNIN_API
const getUserDetailsEndpoint = import.meta.env.VITE_GETOWNUSER_API
const getAllPostsEndpoint = import.meta.env.VITE_ALLPOSTS_API
const getSubscribedCommunities = import.meta.env.VITE_SUBSCRIBEDCOMMUNITIES_API
const createPost = import.meta.env.VITE_CREATEPOST

export {
    signUpEndpoint,
    signInEndpoint,
    getUserDetailsEndpoint,
    getAllPostsEndpoint,
    getSubscribedCommunities,
    createPost
}