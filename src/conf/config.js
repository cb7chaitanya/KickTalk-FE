const signUpEndpoint = import.meta.env.VITE_SIGNUP_API
const signInEndpoint = import.meta.env.VITE_SIGNIN_API
const getUserDetailsEndpoint = import.meta.env.VITE_GETOWNUSER_API
const getAllPostsEndpoint = import.meta.env.VITE_ALLPOSTS_API
const getSubscribedCommunities = import.meta.env.VITE_SUBSCRIBEDCOMMUNITIES_API
const createPostEndpoint = import.meta.env.VITE_CREATEPOST_API
const createCommunityEndpoint = import.meta.env.VITE_CREATECOMMUNITY_API
const createProfileEndpoint = import.meta.env.VITE_CREATEPROFILE_API
const getYourPostsEndpoint = import.meta.env.VITE_GETYOURPOSTS_API
const postVoteHandlingEndpoint = import.meta.env.VITE_POSTVOTEHANDLE_API
const getPostByIdEndpoint = import.meta.env.VITE_GETPOSTBYID_API
const commentHandlingEndpoint = import.meta.env.VITE_COMMENTS_API
const commentEndpoint = import.meta.env.VITE_COMMENT_API
const commentVoteHandlingEndpoint = import.meta.env.VITE_COMMENTVOTING_API
const deletePostEndpoint = import.meta.env.VITE_DELETEPOST_API
const getAllCommunitiesEndpoint = import.meta.env.VITE_GETALLCOMMUNITIES_API 
const getCommunityEndpoint = import.meta.env.VITE_GETCOMMUNITY_API
const getCommunityPostsEndpoint = import.meta.env.VITE_GETCOMMUNITYPOSTS_API 
const subscribeCommunityEndpoint = import.meta.env.VITE_COMMUNITYSUBSCRIBE_API
const unsubscribeCommunityEndpoint = import.meta.env.VITE_COMMUNITYUNSUBSCRIBE_API
const unfollowEndpoint = import.meta.env.VITE_UNFOLLOW_API
const followEndpoint = import.meta.env.VITE_FOLLOW_API
const userSearchEndpoint = import.meta.env.VITE_USERSEARCH_API

export {
    signUpEndpoint,
    signInEndpoint,
    getUserDetailsEndpoint,
    getAllPostsEndpoint,
    getSubscribedCommunities,
    createPostEndpoint,
    createCommunityEndpoint,
    createProfileEndpoint,
    getYourPostsEndpoint,
    postVoteHandlingEndpoint,
    getPostByIdEndpoint,
    commentHandlingEndpoint,
    commentEndpoint,
    commentVoteHandlingEndpoint,
    deletePostEndpoint,
    getAllCommunitiesEndpoint,
    getCommunityEndpoint,
    getCommunityPostsEndpoint,
    subscribeCommunityEndpoint,
    unsubscribeCommunityEndpoint,
    unfollowEndpoint,
    followEndpoint,
    userSearchEndpoint
}