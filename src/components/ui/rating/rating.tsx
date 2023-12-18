import { FC } from 'react'

import { FilledStar } from '../../../assets/icons/filled-star'
import { OutlinedStar } from '../../../assets/icons/outlined-star'

type Props = {
  starCount: number
  grade: number
}

export const Rating: FC<Props> = ({ starCount, grade }) => {
  return (
    <>
      {/*// @ts-ignore*/}
      {[...Array(starCount)].map((star, index) => {
        const currentStarGrade = index + 1

        return currentStarGrade <= grade ? <FilledStar key={star} /> : <OutlinedStar />
      })}
    </>
  )
}
