import Link from 'next/link'

export const Copyright = () => {
  return (
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
  )
}
