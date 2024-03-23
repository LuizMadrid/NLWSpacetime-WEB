import { Camera, ChevronLeftIcon } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default function NewMemories() {
  const isAuth = cookies().has('token')

  return (
    <>
      {isAuth ? (
        <div className="flex flex-1 flex-col gap-4">
          <Link href="/" passHref>
            <button className="flex items-center space-x-1 text-sm text-gray-200 hover:text-gray-100">
              <ChevronLeftIcon size={16} />
              <span>Back to Memories</span>
            </button>
          </Link>

          <form className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-4">
              <label
                htmlFor="media"
                className="flex cursor-pointer items-center gap-1.5 text-center text-sm text-gray-200 hover:text-gray-100"
              >
                <Camera size={16} />
                Anexar mídia
              </label>
              <input type="file" id="media" className="hidden" />

              <label
                htmlFor="isPublic"
                className="flex cursor-pointer items-center gap-1.5 text-center text-sm text-gray-200 hover:text-gray-100"
              >
                <input
                  type="checkbox"
                  name="isPublic"
                  id="isPublic"
                  className="size-4 rounded border-gray-400 bg-gray-700 text-purple-500"
                />
                Tornar memória pública
              </label>
            </div>

            <textarea
              name="description"
              spellCheck={false}
              className="w-full flex-1 resize-none rounded border-0 bg-transparent p-2 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
              placeholder="Fique livre para adicionar fotos, videos e relatos sobre essa experiência que você quer se lembrar para sempre!"
            />
          </form>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1>Not authorized</h1>
          <p>You need to be logged in to create new memories</p>
        </div>
      )}
    </>
  )
}
