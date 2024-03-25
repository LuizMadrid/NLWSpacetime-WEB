import { NewMemoryForm } from '@/components/common/NewMemoryForm'
import { ChevronLeftIcon } from 'lucide-react'
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

          <NewMemoryForm />
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
