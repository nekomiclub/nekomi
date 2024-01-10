'use client'

import * as Provider from '../components/Providers';
import NotFound from './oops/404/page';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <Provider.Routing><NotFound /></Provider.Routing>
}