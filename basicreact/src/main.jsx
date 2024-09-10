import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MYApp(){
  return (
    <div>custom app</div>
  )
}

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target:'_blank'},
  'click to visite'
  
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* reactElement */}
    <MYApp />
  </StrictMode>,
)
