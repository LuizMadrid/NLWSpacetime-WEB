import { getUser } from '@/lib/auth'
import Image from 'next/image'

export const UserProfile = () => {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <div className="relative size-10 overflow-hidden rounded-full">
        <Image src={avatarUrl} alt={name} fill sizes="100%" />
      </div>

      <div className='className="max-w-36 leading-snug" text-sm'>
        <p>{name}</p>
        <a href="/api/auth/logout">
          <span className="font-semibold capitalize text-red-400 transition-all duration-500 hover:text-red-300 hover:transition-all hover:duration-500">
            Quero Sair
          </span>
        </a>
      </div>
    </div>
  )
}
