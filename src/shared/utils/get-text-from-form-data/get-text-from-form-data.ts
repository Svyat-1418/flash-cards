export const getTextFromFormData = (formData: FormData, key: string) => {
  const text = formData.get(key)

  if (typeof text === 'string') {
    return text
  }
}
