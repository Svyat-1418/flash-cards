import { FC, useEffect, useState } from 'react'

import s from './learn.module.scss'

import { Button } from '@/shared/ui-kit/button'
import { Card } from '@/shared/ui-kit/card'
import { RadioGroup } from '@/shared/ui-kit/radio-group'
import { Typography } from '@/shared/ui-kit/typography'

const grades = [
  { label: 'Did not know', value: '1' },
  { label: 'Forgot', value: '2' },
  { label: 'A lot of thought', value: '3' },
  { label: 'Confused', value: '4' },
  { label: 'Knew the answer', value: '5' },
]

export const Learn: FC<Props> = ({
  shots,
  deckName,
  question,
  answer,
  handleSaveGrade,
  setShowAnswer,
  showAnswer,
}) => {
  const [grade, setGrade] = useState(1)

  useEffect(() => {}, [grade])
  const handleShowAnswer = () => {
    setShowAnswer(true)
  }
  const handleRateYourself = (value: string) => {
    setGrade(+value)
  }
  const handleNextAnswer = () => handleSaveGrade(grade)

  return (
    <Card className={s.learnCard}>
      <Typography variant={'large'} className={s.title}>
        {`Learn "${deckName}"`}
      </Typography>
      <Typography variant={'h3'} className={s.question}>
        Question:{' '}
        <Typography variant={'body2'} as={'span'} className={s.questionText}>
          {question}
        </Typography>
      </Typography>
      <Typography variant={'body2'}>Number of attempts to answer the question: {shots}</Typography>
      {showAnswer ? (
        <>
          <Typography variant={'h3'} className={s.answer}>
            Answer:{' '}
            <Typography variant={'body2'} as={'span'} className={s.answerTex}>
              {answer}
            </Typography>
          </Typography>
          <Typography variant={'h3'} className={s.rateText}>
            Rate yourself:
          </Typography>
          <RadioGroup options={grades} onValueChange={handleRateYourself} />
          <Button fullWidth className={s.btn} onClick={handleNextAnswer}>
            Next Question
          </Button>
        </>
      ) : (
        <>
          <Button fullWidth className={s.btn} onClick={handleShowAnswer}>
            Show Answer
          </Button>
        </>
      )}
    </Card>
  )
}

type Props = {
  showAnswer: boolean
  setShowAnswer: (showAnswer: boolean) => void
  deckName: string
  question: string
  answer: string
  shots: number
  handleSaveGrade: (grade: number) => void
}
