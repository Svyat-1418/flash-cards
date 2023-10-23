import { useState } from 'react'

import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Learn } from '../../components/learn/learn.tsx'
import { BackToDecksList } from '../../components/ui/back-to-decks-list/index.tsx'
import { useGetDeckByIdQuery } from '../../services/decks/decks-endpoints.ts'
import { useLearnDeckQuery, useSaveGradeMutation } from '../../services/learn/learn-endpoints.ts'

//import s from './learn-page.module.scss'

export const LearnPage = () => {
  const { deckId } = useParams<{ deckId: string }>()

  const { data: deckData } = useGetDeckByIdQuery({
    id: deckId || '',
  })
  const { data: cardData } = useLearnDeckQuery({ id: deckId || '' })
  const [saveGrade] = useSaveGradeMutation()

  const [showAnswer, setShowAnswer] = useState(false)

  const handleSaveGrade = async (grade: number) => {
    await saveGrade({ grade, deckId: deckId || '', cardId: cardData?.id || '' })
      .unwrap()
      .then(() => {
        setShowAnswer(false)
      })
      .catch(err => {
        const error = err as { data: { message: string } }

        toast.error(error.data.message)
      })
  }

  return (
    <div>
      <BackToDecksList />
      {deckData && cardData && (
        <Learn
          setShowAnswer={setShowAnswer}
          showAnswer={showAnswer}
          shots={cardData.shots}
          handleSaveGrade={handleSaveGrade}
          deckName={deckData.name}
          question={cardData.question}
          answer={cardData.answer}
        />
      )}
    </div>
  )
}
