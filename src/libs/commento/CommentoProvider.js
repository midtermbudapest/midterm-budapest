import { useEffect } from 'react';
import { injectScript } from '../utils/scripts';

export const CommentoProvider = () => {
  useEffect(() => {
    injectScript(process.env.REACT_APP_COMMENTO_URL)
  }, [])
  return (
    <div id="commento"></div>
  )
}
