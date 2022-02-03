import { store } from '../../Store/store'
import { Provider } from 'react-redux'
import WebPageWrapper from '../WebPageWrapper'
import { ReactNode } from 'react'

interface IHOC {
  children: ReactNode,
  propsPage?: {}
}

export default function HOC ({ children, propsPage }: IHOC) {
  return (
    <Provider store={store}>
      <WebPageWrapper
        {...propsPage}
      >
        {children}
      </WebPageWrapper>
    </Provider>
  )
}
