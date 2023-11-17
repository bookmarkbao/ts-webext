import React, { useEffect, useState } from 'react'

export function setupApp(props) {
  const [app, setApp] = useState({ context: '' })

  useEffect(() => {
    setApp({ context: '' })
  }, [])

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
