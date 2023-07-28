import { Meta } from '@storybook/react'

import { Rating } from './'

export default {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>

export const OneGradeRating = {
  args: {
    starCount: 5,
    grade: 1,
  },
}

export const TwoGradeRating = {
  args: {
    starCount: 5,
    grade: 2,
  },
}

export const ThreeGradeRating = {
  args: {
    starCount: 5,
    grade: 3,
  },
}

export const FourGradeRating = {
  args: {
    starCount: 5,
    grade: 4,
  },
}

export const FiveGradeRating = {
  args: {
    starCount: 5,
    grade: 5,
  },
}
