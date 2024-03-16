import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-stars bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <Link
          href={'/'}
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

        <div className="space-y-5">
          <div className="relative h-12 max-w-40">
            <Image src="/nlw-logo.svg" alt="NLW Spacetime" fill sizes="100%" />
          </div>

          <div className="max-w-md space-y-1">
            <h1 className="text-[2.5rem] font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <Link href={'/'} passHref className="flex">
            <button className="rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600 hover:transition-colors">
              Cadastrar lembrança
            </button>
          </Link>
        </div>

        <div className="flex gap-1 text-sm leading-relaxed text-gray-200">
          <p>Feito com 💜 no NLW da</p>
          <Link
            href={'http://rocketseat.com.br'}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-100"
          >
            Rocketseat
          </Link>
        </div>
      </div>

      <div className="flex flex-col bg-stars bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <Link href={'/'} className="underline hover:text-gray-50">
              criar agora
            </Link>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
