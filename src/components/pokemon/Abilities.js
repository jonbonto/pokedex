import React from 'react'
import { Card } from 'antd'

export default function Abilities({abilities = []}) {
  return (
    <Card title="Abilities">
      {abilities.map(ability => (
        <>
        <p>{ability.ability.name}</p>
        <p>{ability.is_hidden ? "Hidden" : "Show"}</p>
        <p>Slot: {ability.slot}</p>
        </>
      ))}
    </Card>
  )
}
