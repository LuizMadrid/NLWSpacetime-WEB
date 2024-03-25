import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  const redirectTo = req.cookies.get('redirectTo')?.value

  const registerCode = await api.post('/register', {
    code,
  })

  const { token } = registerCode.data

  const redirectUrl = redirectTo ?? new URL('/', req.url)

  const tokenCookieExpiresInSeconds = 60 * 60 * 24 * 7 // 1 week

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${tokenCookieExpiresInSeconds}`,
    },
  })
}
