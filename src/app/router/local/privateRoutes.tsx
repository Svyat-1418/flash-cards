import { RouteObject } from 'react-router-dom'

import { DeckPage } from '@pages/deck-page'
import { DecksListPage } from '@pages/decks-list-page'
import { LearnPage } from '@pages/learn-page'
import { ProfilePage } from '@pages/profile-page'
import { PATH } from '@shared/constants/router-path'

export const privateRoutes: RouteObject[] = [
  {
    path: PATH.HOME,
    element: <DecksListPage />,
  },
  {
    path: PATH.DECK_PAGE,
    element: <DeckPage />,
  },
  {
    path: PATH.LEARN,
    element: <LearnPage />,
  },
  {
    path: PATH.PROFILE,
    element: <ProfilePage />,
  },
]
