import React, { createContext, ReactElement, useContext, useState } from 'react'
import { DefaultComponentProps, ToggleProps } from '../../interfaces'
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from './styles/accordion'

const ToggleContext = createContext<Partial<ToggleProps>>({ toggleShow: false })

export default function Accordion({
  children,
  ...restProps
}: DefaultComponentProps): ReactElement {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = ({ children, ...restProps }: DefaultComponentProps) => {
  return <Title {...restProps}>{children}</Title>
}
Accordion.Frame = ({ children, ...restProps }: DefaultComponentProps) => {
  return <Frame {...restProps}>{children}</Frame>
}
Accordion.Item = function AccordionTitle({
  children,
  ...restProps
}: DefaultComponentProps): ReactElement {
  const [toggleShow, setToggleShow] = useState<boolean>(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({
  children,
  ...restProps
}: DefaultComponentProps): ReactElement {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return (
    <Header
      onClick={() => setToggleShow && setToggleShow(!toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  )
}

Accordion.Body = function AccordionBody({
  children,
  ...restProps
}: DefaultComponentProps): ReactElement | null {
  const { toggleShow } = useContext(ToggleContext)

  return toggleShow ? <Body {...restProps}>{children}</Body> : null
}