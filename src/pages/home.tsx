import React, { ReactElement } from 'react'
import FaqContainer from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'

export default function home(): ReactElement {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  )
}
