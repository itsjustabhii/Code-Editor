import { useEffect, useState } from 'react'

const PREFIX = 'codepen'

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key

  //Getting storage from local storage
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

    //Saving our value in localstorage
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]  //returning the value
}