import { useState } from 'react'
import { ErrorDisplayer } from '../components/ErrorDisplayer.component'

export const useDisplayError = () => {
  const [errorComponent, setErrorComponent] = useState(<></>)

  const displayErrors = (messages = [], time) => {
    setErrorComponent(<ErrorDisplayer errors={messages} />)
    setTimeout(
      () => setErrorComponent(<></>),
      time ? time : 1000 * messages?.length
    )
  }

  return [displayErrors, errorComponent, setErrorComponent]
}
