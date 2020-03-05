import React from 'react'
import { Card } from 'antd'

export default function Forms({forms = []}) {
  return (
    <Card title="Forms">
      {forms.map(form => (
        <>
        <p>{form.name}</p>
        </>
      ))}
    </Card>
  )
}
