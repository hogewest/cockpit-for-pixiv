import React from 'react'
import styled from 'styled-components'
import { getDesc, keyMap } from '../../../constants'
import { IllustProvider } from '../../../contexts'
import { Hotkeys } from '../../Hotkeys'
import { Button } from '../../shared/Button'
import { Like } from '../../shared/Icon'
import { color } from '../../theme'

const title = getDesc('like')

export function LikeButton() {
  const { read, like } = IllustProvider.use()
  const illust = read()

  if (!illust) {
    return <LikeButtonFallBack />
  }
  if (illust.isBookmarkable === false) {
    return (
      <Button v="icon" disabled title="いいね！(L)">
        <Like />
      </Button>
    )
  }
  if (illust.likeData) {
    return (
      <FakeButton>
        <Like />
      </FakeButton>
    )
  }

  return (
    <Button v="icon" onClick={like} title="いいね！(L)">
      <Like />
      <Hotkeys {...keyMap.like} onKeyDown={like} />
    </Button>
  )
}

export function LikeButtonFallBack() {
  return (
    <Button v="icon" disabled title={title}>
      <Like />
    </Button>
  )
}

const FakeButton = styled.div`
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  margin: auto;
  padding: 12px;
  color: ${color.primary};
`
