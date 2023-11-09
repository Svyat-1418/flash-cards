export const getFileFromFormData = (formData: FormData, key: string) => {
  const file = formData.get(key)

  if (file !== null && file instanceof File) {
    return file
  }
}
