import { IS_SERVER } from "../../../modules/core/constants"
import { useState, useEffect } from "react"

const noop = (_: string) => {}

export const useLocalStorage = (storageKey: string, defaultValue: string) => {
  if (IS_SERVER) return [defaultValue, noop] as const

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(
    window.localStorage.getItem(storageKey) ?? defaultValue,
  )

  const setNew = (newValue: string) => {
    window.localStorage.setItem(storageKey, newValue)
    setValue(newValue)
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleChange = (event: StorageEvent) => {
      const { key, newValue } = event

      if (key === storageKey) {
        setValue(newValue ?? defaultValue)
      }
    }

    window.addEventListener("storage", handleChange)

    return () => {
      window.removeEventListener("storage", handleChange)
    }
  })

  return [value, setNew] as const
}
