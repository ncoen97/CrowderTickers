// src/hooks/useWebSocket.ts
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useRef } from 'react'

export const useWebSocket = (url: string, onMessage: (data: any) => void) => {
  const socket = useRef<WebSocket | null>(null)
  useFocusEffect(
    useCallback(() => {
      // console.log('callback', socket.current)
      if (!socket.current) {
        // console.log('create socket', url)
        socket.current = new WebSocket(url)

        socket.current.onopen = () => {
          // console.log('Socket opened!', url)
        }

        socket.current.onmessage = (event) => {
          // console.log('Socket onmessage -', url)
          onMessage(JSON.parse(event.data))
        }

        socket.current.onclose = () => {
          // console.log('Socket closed', url)
        }

        socket.current.onerror = (data) => {
          console.error('Socket ERROR!', url, data)
        }
      }

      return () => {
        socket.current?.close()
        socket.current = null
      }
    }, [onMessage, url])
  )
}
