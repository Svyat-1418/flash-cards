import { cloneElement, ReactElement, ReactNode, useRef } from 'react'

type CustomFileInputProps = {
  onFileChange: (file: File) => void
  children: ReactNode
}

export const FileInput = ({ onFileChange, children }: CustomFileInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = () => {
    const fileInput = fileInputRef.current

    if (fileInput && fileInput.files) {
      const file = fileInput.files[0]

      if (onFileChange) {
        onFileChange(file)
      }
    }
  }

  const handleButtonClick = () => {
    const fileInput = fileInputRef.current

    if (fileInput) {
      fileInput.click()
    }
  }

  return (
    <div>
      {cloneElement(children as ReactElement, {
        onClick: handleButtonClick,
      })}
      <input
        type="file"
        id="customFileInput"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  )
}
