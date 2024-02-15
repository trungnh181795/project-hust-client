'use-client'
/* Libs */
import React, { useEffect, useState, useCallback } from 'react'
import { Typography } from '@mui/material'
import Video, { LocalAudioTrack, LocalVideoTrack } from 'twilio-video'
/* Components */
import Participant from '../Participant'
import Control from '../Control'
/* Styles */
import { VideoWrapper, VideoBackground } from '@/components/videos/styles'
import { CircleLoading } from '@/components/common/Loading'

interface Props {
  roomName: string
  username: string
  onClose: () => void
}

const VideoCall: React.FC<Props> = ({ roomName, username, onClose }) => {
  const [participants, setParticipants] = useState<Video.Participant[]>([])
  const [room, setRoom] = useState<Video.Room | null>(null)
  const [videoConnecting, setVideoConnecting] = useState<boolean>(false)

  const handleLogout = useCallback(() => {
    setRoom((prevRoom) => {
      if (prevRoom) {
        type MediaTrack = LocalVideoTrack | LocalAudioTrack
        prevRoom.localParticipant.tracks.forEach((trackPub) => {
          ;(trackPub.track as MediaTrack).stop()
        })
        prevRoom.disconnect()
      }
      return null
    })
    onClose()
  }, [])

  const connectToVideoServer = async () => {
    setVideoConnecting(true)
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_VIDEO_SDK_URL}/api/video/token`,
      {
        method: 'POST',
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json())
    Video.connect(data.token, {
      audio: true,
      name: roomName,
      video: { width: 1920, height: 1080 },
    })
      .then((room: Video.Room) => {
        setVideoConnecting(false)
        setRoom(room)
      })
      .catch((err) => {
        console.error(err)
        setVideoConnecting(false)
      })
  }
  useEffect(() => {
    connectToVideoServer()

    return () => handleLogout()
  }, [])

  useEffect(() => {
    const participantConnected = (participant: Video.Participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant])
    }

    const participantDisconnected = (participant: Video.Participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      )
    }
    if (room) {
      room.on('participantConnected', participantConnected)
      room.on('participantDisconnected', participantDisconnected)
      room.participants.forEach(participantConnected)
    }
    return () => {
      if (room) {
        room.off('participantConnected', participantConnected)
        room.off('participantDisconnected', participantDisconnected)
      }
    }
  }, [room])

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ))

  return (
    <VideoWrapper>
      {!videoConnecting ? (
        remoteParticipants.length > 0 ? (
          remoteParticipants
        ) : (
          <>
            <VideoBackground>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: '#FFFFFF' }}
              >
                Waiting for patient...
              </Typography>
            </VideoBackground>
            {room ? (
              <VideoWrapper local>
                <Participant
                  key={room.localParticipant.sid}
                  participant={room.localParticipant}
                />
              </VideoWrapper>
            ) : (
              ''
            )}
            <Control onCallEndClick={handleLogout} />
          </>
        )
      ) : (
        <CircleLoading message="Connecting..." />
      )}
    </VideoWrapper>
  )
}

export default VideoCall
