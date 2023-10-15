import React from 'react'

export const NFTs = () => {

    const nfts = [
        {
            image: 'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
            title: 'The Bored Ape NFT'
        },
        {
            image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max',
            title: 'Bored Ape Yacht Club NFT'
        },
        {
            image: 'https://static.news.bitcoin.com/wp-content/uploads/2022/02/unnamed-16.png',
            title: 'The Bored Ape NFT'
        },
        {
            image: 'https://www.cnet.com/a/img/resize/e0ebf3dc974fce8609d2ba49fa36cf0f93190062/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&fit=crop&height=1200&width=1200',
            title: 'Bored Ape Yacht Club NFT'
        }
    ]
    
    return (
        <div className='w-full px-2 flex justify-around flex-wrap '>
            {
                nfts.map((nft, id) => (
                    <div className='w-1/2 md:w-1/4 p-2 '>
                        <div className='w-full  p-3 flex flex-col space-y-2 items-center justify-center roudned-xl bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 shadow-lg' key={id}>
                            <img src={nft.image} alt={nft.title} className='w-full  rounded-xl' />
                            <h3 className='font-bold text-xs md:text-lg text-center text-indigo-950'>
                                { nft.title }
                            </h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
