import { useState, useCallback, useEffect, ChangeEvent } from 'react'

export function useInput(initialValue: string) {
  const [value, set] = useState(initialValue)
  const clear = useCallback(() => set(''), [])
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    set(event.target.value)
  }, [])
  useEffect(() => set(initialValue), [initialValue])

  return { value, set, clear, bind: { value, onChange } }
}