export const PATH = {
  HOME: '/',
  DECK_PAGE: 'cards/:deckId',
  LEARN: 'learn/:deckId',
  PROFILE: 'profile',
  LOGIN: 'login',
  REGISTER: 'sign-up',
  RECOVERY_PASSWORD: 'recover-password',
  CHECK_EMAIL: 'check-email/:email?',
  CREATE_NEW_PASSWORD: 'new-password/:token',
} as const
