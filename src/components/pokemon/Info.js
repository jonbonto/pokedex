import React from 'react'
import { Card } from 'antd'

export default function Info({name, weight, height, baseExperience}) {
  return (
    <Card title={name} bordered={false}>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <p>Base Experience: {baseExperience}</p>
    </Card>
  )
}
