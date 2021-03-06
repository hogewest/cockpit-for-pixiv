import React from 'react'
import { getDesc, keyMap } from '../../../constants'
import { IllustProvider } from '../../../contexts'
import { Hotkeys } from '../../Hotkeys'
import { Button } from '../../shared/Button'
import { Tweet } from '../../shared/Icon'

const title = getDesc('share')

export function ShareButton() {
  const { read, share } = IllustProvider.use()
  const illust = read()

  if (!illust) return <ShareButtonFallback />

  return (
    <Button v="icon" onClick={share} title={title}>
      <Tweet />
      <Hotkeys {...keyMap.share} onKeyDown={share} />
    </Button>
  )
}

export function ShareButtonFallback() {
  return (
    <Button v="icon" disabled title={title}>
      <Tweet />
    </Button>
  )
}
