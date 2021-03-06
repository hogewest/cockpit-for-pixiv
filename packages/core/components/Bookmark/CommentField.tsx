import React from 'react'
import styled from 'styled-components'
import { Text } from '../shared/Text'
import { TextField } from '../shared/TextField'

const MAX = 140

type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  children?: never
}

export function CommentField(props: Props) {
  const count = props.value.length
  const invalid = count > MAX
  const text = `${count}/${MAX}`

  return (
    <div>
      <TextField type="text" {...props} invalid={invalid} autoFocus>
        ブックマークコメント
      </TextField>
      <Helper v="caption" c={invalid ? 'error' : 'default'} a="right">
        {text}
      </Helper>
    </div>
  )
}

const Helper = styled(Text)`
  margin-top: 2px;
  padding: 0 12px;
`
