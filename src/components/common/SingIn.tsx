import { User } from 'lucide-react'
import Link from 'next/link'

export const SingIn = () => {
  return (
    <Link
      href={`http://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="group/login flex items-center gap-3 text-left"
    >
      <div className="flex size-10 items-center justify-center rounded-full bg-gray-400 text-gray-500 transition-all group-hover/login:bg-gray-200 group-hover/login:transition-all">
        <User size={24} />
      </div>

      <p className="max-w-36 text-sm leading-snug">
        <span className="underline transition-colors group-hover/login:text-gray-50 group-hover/login:transition-colors">
          Crie sua conta
        </span>{' '}
        e salve suas memórias!
      </p>
    </Link>
  )
}
