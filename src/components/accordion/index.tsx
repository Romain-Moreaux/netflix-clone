import React, { createContext, ReactElement, useContext, useState } from 'react'
import { Transition } from 'react-transition-group'
import {
  AnimateProps,
  DefaultComponentProps,
  ToggleProps,
} from '../../interfaces'
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

Accordion.Title = ({ children, ...restProps }: DefaultComponentProps) => (
  <Title {...restProps}>{children}</Title>
)

Accordion.Frame = ({ children, ...restProps }: DefaultComponentProps) => (
  <Frame {...restProps}>{children}</Frame>
)

Accordion.Item = function AccordionTitle({
  children,
  ...restProps
}: DefaultComponentProps) {
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
}: DefaultComponentProps) {
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
}: AnimateProps) {
  const { toggleShow } = useContext(ToggleContext)

  return (
    <Transition<undefined>
      in={toggleShow}
      timeout={250}
      unmountOnExit
      mountOnEnter
    >
      {(animationState: string) => (
        // state change: exited -> entering -> entered -> exiting -> exited
        <Body {...restProps} state={animationState}>
          {children}
        </Body>
      )}
    </Transition>
  )
}
