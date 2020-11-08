import { Dispatch, SetStateAction } from 'react'

type Dispatcher<S> = Dispatch<SetStateAction<S>>

export interface DefaultComponentProps {
  children: React.ReactNode
}
export interface JumbotronProps extends DefaultComponentProps {
  direction?: string
}

export interface ImageProps {
  src: string
  alt: string
}

export interface LinkProps extends DefaultComponentProps {
  href: string
}

export interface AccordionProps extends DefaultComponentProps {}

export interface ToggleProps {
  toggleShow: boolean
  setToggleShow: Dispatcher<boolean>
}
