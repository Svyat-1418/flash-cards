import { Column } from '../../ui/table/types.ts'

export type Card = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  questionImg?: any
  answerImg?: any
  answerVideo?: any
  questionVideo?: any
  comments?: any
  type?: any
  rating: number
  moreId?: any
  created: string
  updated: string
}

const cardObj = {
  id: 'clkpxprfz00d3vy2syvasit3i',
  deckId: 'clkpwk1p400covy2sgh9pm306',
  userId: 'b92084f6-6177-48ce-97f5-5d50e968cc82',
  question: 'What is "ashame"?',
  answer: 'Стыд',
  shots: 0,
  questionImg: null,
  answerImg: null,
  answerVideo: null,
  questionVideo: null,
  comments: null,
  type: null,
  rating: 0,
  moreId: null,
  created: '2023-07-30T21:09:36.427Z',
  updated: '2023-07-30T21:09:36.427Z',
}

export type CardTableContent = {
  question: string
  answer: string
  updated: string
  grade: number
}
export const cardContent: CardTableContent[] = [
  {
    question: 'How translate Upbringing into Russian ?',
    answer: 'Воспитание',
    updated: '2023-07-07',
    grade: 3,
  },
  {
    question: 'How translate A glance into Russian ?',
    answer: 'Взгляд',
    updated: '2023-07-07',
    grade: 4,
  },
  {
    question: 'How translate To pear at into Russian ?',
    answer: 'Всматриваться в',
    updated: '2023-07-07',
    grade: 1,
  },
  {
    question: 'How translate Tears into Russian ?',
    answer: 'Слёзы',
    updated: '2023-07-07',
    grade: 5,
  },
  {
    question: 'How translate Modesty into Russian ?',
    answer: 'Скромность',
    updated: '2023-07-07',
    grade: 3,
  },
]
export const cardColumns: Column[] = [
  {
    key: 'question',
    title: 'Question',
    isSortable: true,
  },
  {
    key: 'answer',
    title: 'Answer',
    isSortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    isSortable: true,
  },
  {
    key: 'grade',
    title: 'Grade',
    isSortable: true,
  },
  {
    key: 'actions',
    title: '',
    isSortable: false,
  },
]
