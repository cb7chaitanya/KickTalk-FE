import * as zod from 'zod'
 
const MAX_UPLOAD_SIZE = 3 * 1024 * 1024
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif']

export const profileBody = zod.object({
    bio: zod.string().min(5).max(50),
    avatarImage: zod.instanceof(File)
    .refine((file) => {
        return !file || file.size <=  MAX_UPLOAD_SIZE
    }, `File size must be less than ${MAX_UPLOAD_SIZE / (1024 * 1024)} MB`)
    .refine((file) => {
        return !file || ACCEPTED_FILE_TYPES.includes(file.type)
    }, `Only PNG, JPEG, and GIF files are allowed`)
})