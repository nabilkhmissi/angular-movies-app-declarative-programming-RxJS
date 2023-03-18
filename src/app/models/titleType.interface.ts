import { Category } from "./category.interface"

export interface TitleType {
    text: string
    id: string
    isSeries: boolean
    isEpisode: boolean
    categories: Category[]
    __typename: string
}