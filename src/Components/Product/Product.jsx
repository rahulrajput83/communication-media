import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Product.css'

function Product(props) {
    const { id } = useParams();
    const [data, setData] = useState({})
    const [likeData, setLikeData] = useState({})
    const [img, setImg] = useState('')

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((res) => {
                setData(res)
                setImg(res.thumbnail)
            })
            .catch(() => {
                console.log('err')
            })
    }, [id, props])

    /*  useEffect(() => {
         if(data) {
             if ('data' in props) {
                 let findLike = props.data.find(item => item.title == data.title);
                 if (!('like' in findLike)) {
                     findLike = { ...findLike, like: false }
                 }
                 setLikeData(findLike)
             }
         }
     }, [props, id, data]) */
    useEffect(() => {
        console.log(likeData)
    }, [likeData])



    return data ?
        <>
            <div className='Product'>
                <img src={img} alt={data.title} />
                <div className='right'>
                    <span className='title'>{data.title}</span>
                    <span className='category'>{data.category}</span>
                    <span className='desc'>{data.description}</span>
                    {/* {likeData && likeData.like ? <BsHeartFill onClick={() => props.handleLike(likeData)} className='like' /> : <BsHeart onClick={() => props.handleLike(likeData)} className='like' />} */}
                    <div className='cartRow'>
                        <button onClick={() => props.handleCart(data)}>Add to Cart</button>
                        <span className='price'>${data.price}</span>
                    </div>
                </div>
                <div className='Images'>
                {data.images && data.images.map((e, i) => {
                    return(
                        <img onClick={() => setImg(e)} key={`ima${i}`} src={e} alt={e} />
                    )
                })}
            </div>
            </div>
            
        </>
        : null
}

export default Product;