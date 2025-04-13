import CardMain from '@/components/Card/CardMain';
import { useRouter } from 'next/router'
import React from 'react'

export default function Book() {
  const router = useRouter();
  const {book} = router.query;

  return (
    <div>
    <CardMain/>
    </div>
  )
}
