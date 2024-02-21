export const convertToLocaleDate = (date: string) => {
  return new Date(date).toLocaleDateString('ru')
}
