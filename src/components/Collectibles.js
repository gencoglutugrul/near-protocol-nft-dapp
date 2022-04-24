import React, { useEffect, useState } from 'react'


const Collectibles = () => {
  const [collectibles, setCollectibles] = useState([])
  const [loading, setLoading] = useState(true)
	
  const getCollectibles = async () => {
    try {
      const response = await window.contract.nft_tokens_for_owner({
        account_id: window.accountId,
      })
      console.log(response)
      setCollectibles(response)
      setLoading(false)
    }catch (e) {
      console.error('Unable to get collectibles', e)
    }
  }

  useEffect(async () => {
    return await getCollectibles()
  }, [window.accountId])

  if(loading)
    return (<>Loading...</>)

  if(collectibles.length == 0)
    return (<>There is no item in your collection. Mint an nft first!</>)

  return (<>
    <h3 style={{textAlign:'center'}}>Love is Love NFT Collection</h3>
    <p style={{textAlign:'center'}}>There is no restrictions in love</p>
    <p style={{textAlign:'center'}}>Your items (<a href='https://wallet.testnet.near.org/' target='_blank' rel="noreferrer">You can also view these in your wallet</a>)</p>
    {collectibles.map((item, i) => <Collectible item={item} key={i}/>)}
  </>)
}

const Collectible = (data) =>{
  return (
    <>
      <div style={{
        maxWidth: '200px',
        marginLeft: '10px',
        display: 'inline-block'
      }}>
        <p>{data.item.metadata.title}</p>
        <img src={data.item.metadata.media} style={{
          width: '100%'
        }}/>
      </div>
    </>
  )}
export default Collectibles
