export const appendDataToFormData = (data: Data) => {
  const formData = new FormData()

  for (const key in data) {
    const value = data[key]

    // Преобразование значений boolean в строки
    if (typeof value === 'boolean') {
      formData.append(key, value ? 'true' : 'false')
    } else {
      formData.append(key, value)
    }
  }

  return formData
}

type Data = Record<string, string | Blob | boolean>
