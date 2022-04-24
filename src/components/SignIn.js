import React from 'react'
import { login } from '../utils'

const SignIn = () => (
  <main>
    <h1>Love is Love NFT</h1>
    <p>
      Mint your love NFT and show everybody that there is no restrictions in love
    </p>
    <p>
      You need to sign in for minting:
    </p>
    <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
      <button onClick={login} className={'rainbow rainbow-1'}>Sign in</button>
    </p>
  </main>
)

export default SignIn
