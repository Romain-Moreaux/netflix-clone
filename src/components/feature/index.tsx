import React from 'react'
import { DefaultComponentProps } from '../../interfaces'
import { Container, Title, SubTitle } from './styles/feature'

export default function Feature({
  children,
  ...restProps
}: DefaultComponentProps) {
  return <Container {...restProps}>{children}</Container>
}

Feature.Title = ({ children, ...restProps }: DefaultComponentProps) => (
  <Title {...restProps}>{children}</Title>
)

Feature.SubTitle = ({ children, ...restProps }: DefaultComponentProps) => (
  <SubTitle {...restProps}>{children}</SubTitle>
)
