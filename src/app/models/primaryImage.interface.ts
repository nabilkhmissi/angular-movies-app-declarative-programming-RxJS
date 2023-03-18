import { Caption } from "./caption.interface"

export interface PrimaryImage {
    id?: string
    width?: number
    height?: number
    url: string
    caption?: Caption
    __typename?: string
}