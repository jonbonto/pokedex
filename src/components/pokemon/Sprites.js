import React from 'react'
import { Card } from 'antd'

export default function Sprites({sprites = {}}) {
  return (
    <Card title="Sprites">
      {Object.entries(sprites).map(([kind,url]) => (
        url && <img src={url} />
      ))}
    </Card>
  )
}
