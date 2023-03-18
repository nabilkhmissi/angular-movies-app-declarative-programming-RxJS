
import { PrimaryImage } from "./primaryImage.interface"
import { ReleaseDate } from "./releaseDate.interface"
import { ReleaseYear } from "./releaseYear.interface"
import { TitleText } from "./titleText.interface"
import { TitleType } from "./titleType.interface"

export interface Movie {
    id: string
    primaryImage: PrimaryImage
    titleType: TitleType
    titleText: TitleText
    releaseYear: ReleaseYear
    releaseDate: ReleaseDate
}