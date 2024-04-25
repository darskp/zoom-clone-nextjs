import { StreamVideoProvider } from '@/providers/StreamProvider'
import React, { ReactNode } from 'react'

function Rootlayout({ children }: { children: ReactNode }) {
    return (
        <main >
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default Rootlayout