import 'regenerator-runtime/runtime'
import React from 'react'
import { logout } from './utils'
import './global.css'

import SignIn from './components/SignIn'
import Mint from './components/Mint'
import Collectibles from './components/Collectibles'

export default function App() {
  if (!window.walletConnection.isSignedIn())
    return <SignIn />

  return (
    <>
      <main>
        <h5 style={{textAlign:'right'}}>Hello, {window.accountId}! (
          <a onClick={logout} style={{cursor: 'pointer'}}>
            Sign out
          </a>)</h5>

        <Mint />
        <Collectibles />
      </main>
    </>
  )
}
