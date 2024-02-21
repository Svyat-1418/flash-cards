import { FilledStar } from '@shared/assets/icons/filled-star'
import { OutlinedStar } from '@shared/assets/icons/outlined-star'

type Props = {
  starCount: number
  grade: number
}

export const Rating = ({ starCount, grade }: Props) => {
  return (
    <>
      {[...Array(starCount)].map(star => {
        const currentStarGrade = star + 1

        return currentStarGrade <= grade ? <FilledStar key={star} /> : <OutlinedStar />
      })}
    </>
  )
}
