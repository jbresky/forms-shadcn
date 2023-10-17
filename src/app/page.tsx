'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  return (
    <main className="p-6">
      <div className='flex m-auto flex-col gap-6 w-96'>
        <h1 className='text-xl font-bold self-start pb-2'>
          Forms
        </h1>
        <Button onClick={() => router.push('/forms/basic')}>Basic form</Button>
        <Button onClick={() => router.push('/forms/intermediate')}>Intermediate form</Button>
        <Button onClick={() => router.push('/forms/advanced')}>Advanced form</Button>
      </div>
    </main>
  )
}
