import { useEffect, useState } from "react"

export const useNetwork = () => {
    const [isOnline, setNetwork] = useState(navigator.onLine)
    const updateNetwork = () => setNetwork(navigator.onLine)

    useEffect(() => {
        window.addEventListener('online', updateNetwork)
        window.addEventListener('offline', updateNetwork)

        return () => {
            window.removeEventListener('online', updateNetwork)
            window.removeEventListener('offline', updateNetwork)
        }
    })

    return isOnline
}