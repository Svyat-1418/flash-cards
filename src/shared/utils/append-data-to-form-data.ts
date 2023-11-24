export const appendDataToFormData = (data: Data) => {
  const formData = new FormData()

  for (const key in data) {
    formData.append(key, data[key])
  }

  return formData
}
type Data = Record<string, string | Blob>
