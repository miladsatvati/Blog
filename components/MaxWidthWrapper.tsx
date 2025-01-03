import React from 'react'
import { cn } from '@/lib/utils';

interface MaxWidthProp {
    children: React.ReactNode;
    className: string
}

const MaxWidthWrapper = ({ children, className }: MaxWidthProp) => {
  return (
    <div className= {cn('mx-auto max-w-screen-7xl w-full my-12', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper