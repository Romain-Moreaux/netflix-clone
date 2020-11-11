import React, { ReactElement } from 'react'
import { DefaultComponentProps } from '../../interfaces'
import { Container, Input, Break, Button, Text } from './styles/opt-form'

export default function OptForm({
  children,
  ...restProps
}: DefaultComponentProps): ReactElement {
  return <Container {...restProps}>{children}</Container>
}

OptForm.Input = ({ ...restProps }) => <Input {...restProps} />

OptForm.Button = ({ children, ...restProps }: DefaultComponentProps) => (
  <Button {...restProps}>
    {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
  </Button>
)

OptForm.Text = ({ children, ...restProps }: DefaultComponentProps) => (
  <Text {...restProps}>{children}</Text>
)

OptForm.Break = ({ ...restProps }) => <Break {...restProps} />
