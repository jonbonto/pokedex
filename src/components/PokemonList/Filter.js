import React from 'react'
import { Select } from 'antd'
import { useFilter } from '../../context/filter-context';

const { Option } = Select

const types = [
  { label: "normal" },
  { label: "fighting" },
  { label: "flying" },
  { label: "poison" },
  { label: "ground" },
  { label: "rock" },
  { label: "bug" },
  { label: "ghost" },
  { label: "steel" },
  { label: "fire" },
  { label: "water" },
  { label: "grass" },
  { label: "electric" },
  { label: "psychic" },
  { label: "ice" },
  { label: "dragon" },
  { label: "dark" },
  { label: "fairy" },
  { label: "unknown" },
  { label: "shadow" }
];


export default function Filter(props) {

  const { setFilter } = useFilter()
  return (
    <Select
      placeholder="Select type"
      onChange={(value) => setFilter(value)}
      allowClear={true}
      style={{ width: 300 }}
    >
      {types.map(({label}) => (
        <Option key={label} value={label}>{label}</Option>
      ))}
    </Select>
  )
}
