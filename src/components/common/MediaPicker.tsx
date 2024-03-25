'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

interface MediaPickerProps {
  id: string
}

export const MediaPicker = ({ id }: MediaPickerProps) => {
  const [isPreview, setIsPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setIsPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id={id}
        className="hidden"
      />

      {isPreview && (
        <div className="relative aspect-video w-full">
          <Image
            src={isPreview}
            alt="Preview Image"
            className="rounded-lg object-cover"
            fill
            sizes="100%"
          />
        </div>
      )}
    </>
  )
}
