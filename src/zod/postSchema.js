import * as zod from 'zod'

const postBody = zod.object({
    title: zod.string().min(5).max(25),
    content: zod.string().min(5).max(25),
    tags: zod.string().array()
})

export { postBody } 