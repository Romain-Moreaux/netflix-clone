import React, { ReactElement } from 'react'
import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron'

export interface JumboProps {
  direction?: string
  children?: React.ReactNode
}
export interface ImageProps {
  src: string
  alt: string
}

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}: JumboProps): ReactElement {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = ({ children, ...restProps }: JumboProps) => {
  return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = ({ children, ...restProps }: JumboProps) => {
  return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = ({ children, ...restProps }: JumboProps) => {
  return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = ({ children, ...restProps }: JumboProps) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = ({ ...restProps }: ImageProps) => {
  return <Image {...restProps} />
}
