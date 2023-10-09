import { FC } from 'react'

import { Link } from 'react-router-dom'

import { PATH } from '../../../pages/router.tsx'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/textfield'
import { Typography } from '../../ui/typography'

export const DeckPanel: FC<Props> = ({ isAuthor, name, searchCard }) => {
  return (
    <>
      <div>
        <Typography variant={'body2'} as={Link} to={PATH.HOME}>
          Back to Decks List
        </Typography>
        <Typography variant={'large'} as={'h1'}>
          {name}
        </Typography>
        {isAuthor ? <Button>Add New Card</Button> : <Button>Learn</Button>}
        <TextField
          type={'search'}
          placeholder={'Input search'}
          onChange={e => searchCard(e.currentTarget.value)}
        />
      </div>
    </>
  )
}

type Props = {
  name: string
  isAuthor: boolean
  searchCard: (cardName: string) => void
}
