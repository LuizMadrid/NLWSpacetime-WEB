import { cookies } from 'next/headers'
import { jwtDecode } from 'jwt-decode'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser() {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Token not found, or user is not authenticated')
  }

  const user: User = jwtDecode(token)

  return user
}
