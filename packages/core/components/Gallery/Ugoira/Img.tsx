import React from 'react'
import { BoardProvider, FitProvider, SpreadProvider } from '../../../contexts'
import { useUgoira } from '../../../hooks'
import { Page } from '../../../interfaces'
import { calcSize } from '../calcSize'
import { Player } from './Player'

type Props = {
  id: string
  page: Page
  children?: never
}

export function Img({ id, page }: Props) {
  const { read, retry } = useUgoira(id)
  const [, size] = BoardProvider.use()
  const [fit] = FitProvider.use()
  const [spread] = SpreadProvider.use()
  const { width, height } = calcSize(size, fit, spread, page)
  const styles = {
    width,
    height,
    transitionProperty: 'width, height',
    transitionDuration: '150ms',
    transitionTimingFunction: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    background: `no-repeat center/contain #fff url(${page.urls.small.replace(
      '540x540_70',
      '150x150'
    )})`
  }
  const frames = read()

  if (!frames) {
    function handleRetry(event: React.MouseEvent) {
      event.stopPropagation()
      retry()
    }

    return <canvas style={styles} onClick={handleRetry} />
  }
  return <Player frames={frames} style={styles} />
}
