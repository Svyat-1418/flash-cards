import { ItemsType } from '../../../services/decks/types.ts'

export type Column = {
  key: string
  title: string
  isSortable?: boolean
}
export const content: ItemsType[] = [
  {
    author: { name: 'John Doe', id: '1' },
    id: new Date().getTime().toString(),
    userId: '1',
    name: 'Project A',
    isPrivate: false,
    shots: 0,
    cover: 'string',
    rating: 0,
    cardsCount: 10,
    updated: '2023-07-07',
    created: '2023-07-07',
  },
  {
    author: { name: 'Bill Daw', id: '2' },
    id: new Date().getTime().toString(),
    userId: '2',
    name: 'Project B',
    isPrivate: false,
    shots: 0,
    cover: 'string',
    rating: 0,
    cardsCount: 8,
    updated: '2023-07-07',
    created: '2023-07-07',
  },
  {
    author: { name: 'Dan Soe', id: '3' },
    id: new Date().getTime().toString(),
    userId: '3',
    name: 'Project C',
    isPrivate: false,
    shots: 0,
    cover: 'string',
    rating: 0,
    cardsCount: 6,
    updated: '2023-07-07',
    created: '2023-07-07',
  },
  {
    author: { name: 'Erick Ken', id: '4' },
    id: new Date().getTime().toString(),
    userId: '4',
    name: 'Project D',
    isPrivate: false,
    shots: 0,
    cover: 'string',
    rating: 0,
    cardsCount: 3,
    updated: '2023-07-07',
    created: '2023-07-07',
  },
  {
    author: { name: 'John Doe', id: '5' },
    id: new Date().getTime().toString(),
    userId: '5',
    name: 'Project E',
    isPrivate: false,
    shots: 0,
    cover: 'string',
    rating: 0,
    cardsCount: 5,
    updated: '2023-07-07',
    created: '2023-07-07',
  },
]
export const columns: Column[] = [
  {
    key: 'name',
    title: 'Name',
    isSortable: true,
  },
  {
    key: 'cardsCount',
    title: 'Cards',
    isSortable: true,
  },
  {
    key: 'updated',
    title: 'Last Updated',
    isSortable: true,
  },
  {
    key: 'createdBy',
    title: 'Created by',
    isSortable: true,
  },
  {
    key: 'actions',
    title: '',
    isSortable: false,
  },
]
