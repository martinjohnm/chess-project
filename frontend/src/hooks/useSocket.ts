import { useEffect, useState } from "react"



const ws_url = import.meta.env.VITE_WEBSOCKET_URL

export const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket | null>()

    useEffect(() => {
        const ws = new WebSocket(ws_url)
        ws.onopen = () => {
            console.log("connected");
            setSocket(ws)
        }

        ws.onclose = () => {
            console.log("disconnected");
            setSocket(null)
        }

        return () => {
            ws.close();
        }
    }, [])

    return socket;
}