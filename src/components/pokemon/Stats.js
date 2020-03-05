import React from 'react'
import { Card } from 'antd'

export default function Stats({stats = []}) {
  return (
    <Card title="Stats">
      {stats.map(stat => (
        <>
        <p>{stat.stat.name}</p>
        <p>Base Stat: {stat.base_stat}</p>
        <p>Effort: {stat.effort}</p>
        </>
      ))}
    </Card>
  )
}
