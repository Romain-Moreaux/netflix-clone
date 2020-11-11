import { Dispatch, SetStateAction } from 'react'

type Dispatcher<S> = Dispatch<SetStateAction<S>>

export interface DefaultComponentProps {
  children: React.ReactNode
}

export interface ImageProps {
  src: string
  alt: string
}

export interface RouterLinkProps extends DefaultComponentProps {
  to: string
}

export interface LinkProps extends DefaultComponentProps {
  href: string
}

export interface JumbotronProps extends DefaultComponentProps {
  direction?: string
}

export interface HeaderProps extends DefaultComponentProps {
  background?: boolean
  src?: string
  dontShowOnSmallViewPort?: boolean
}

export interface HeaderLogoProps {
  to: string
  src: string
  alt: string
}

export interface ToggleProps {
  toggleShow: boolean
  setToggleShow: Dispatcher<boolean>
}

export interface AnimateProps extends DefaultComponentProps {
  state?: string
}
