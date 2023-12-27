'use client'

import PageRouter from '../components/PageRouter';
import NotFound from './oops/404/page';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error(error)

  return <PageRouter><NotFound /></PageRouter>
}