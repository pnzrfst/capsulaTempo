import "./styles.css";
import React from 'react'

type NuvemProps = {
  text: string;
};

export default function Nuvem({ text }: NuvemProps) {
  return (
    <span>{text}</span>
  )
}

