
"use client";

import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

export default function page({ params }: { params: { id: string } }) {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetUpComplete] = useState(false)
  return (

    <main className=''>
      <StreamCall call={}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup />
          ) : (
            <MeetingRoom />
          )
          }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}
