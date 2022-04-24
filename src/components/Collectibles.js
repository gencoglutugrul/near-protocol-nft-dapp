import React, { useEffect, useState } from 'react'


const Collectibles = () => {
  const [collectibles, setCollectibles] = useState([])
  const [loading, setLoading] = useState(true)
	
  const getCollectibles = async () => {
    try {
      const response = await window.contract.nft_tokens_for_owner({
        account_id: window.accountId,
      })
      
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
      <a href={data.item.metadata.media} target={'_blank'} rel="noreferrer">
        <figure className={'figurefx pushup'} style={{
          maxWidth: '100%'
        }}>
          <img src={data.item.metadata.media} alt={data.item.metadata.title} style={{width: '100%'}} />
          <figcaption>{data.item.metadata.title}</figcaption>
        </figure>
      </a>  
    </>
  )}
export default Collectibles
