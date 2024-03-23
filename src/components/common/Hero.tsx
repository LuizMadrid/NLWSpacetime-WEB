import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <div className="space-y-5">
      <div className="relative h-12 max-w-40">
        <Image src="/nlw-logo.svg" alt="NLW Spacetime" fill sizes="100%" />
      </div>

      <div className="max-w-md space-y-1">
        <h1 className="text-[2.5rem] font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link href={'/memories/new'} passHref className="flex">
        <button className="rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600 hover:transition-colors">
          Cadastrar lembrança
        </button>
      </Link>
    </div>
  )
}
