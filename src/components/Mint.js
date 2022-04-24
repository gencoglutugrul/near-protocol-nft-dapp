import { utils } from 'near-api-js'
import React from 'react'

const Mint = () => {
  return (<>
    <form onSubmit={mintNFT} style={{marginBottom: '70px'}}>
      <h3 style={{textAlign:'center'}}>MINT NOW AND FREE THE LOVE!</h3>
      <p>Show everybody that there is no restrictions in love.</p>
      <div style={{ textAlign: 'center' }}>
        <button className={'rainbow rainbow-1'}>MINT NOW!</button>
      </div>
    </form>
  </>)
}

const mintNFT = async event => {
  event.preventDefault()

  try {
    await window.contract.nft_mint(
      {receiver_id: window.accountId}, 
      300000000000000, 
      utils.format.parseNearAmount('1')
    )
  } catch (e) {
    console.log(
      'Something went wrong! ' +
              'Maybe you need to sign out and back in? ' +
              'Check your browser console for more info.'
    )
    throw e
  }
}

export default Mint
