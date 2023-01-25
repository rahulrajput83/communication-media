import React, { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import './Product.css'

function Product(props) {
    const navigate = useNavigate()
    const { id } = useParams();
    const [data, setData] = useState({})
    const [like, setLike] = useState(false)
    const [img, setImg] = useState('')


    /* Fetch single product details */
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

    /* useEffect to check like stutus */

    useEffect(() => {
        if(props.data.length <= 0) {
            navigate('/')
        }
        else {
            const index = [...props.data].findIndex(e => e.id == id);
        if(props.data[index].like) {
            setLike(true)
        }
        else{
            setLike(false)
        }
        }
    }, [props, id, navigate])

    return data ?
        <>
            <div className='Product'>
                <img src={img} alt={data.title} />
                <div className='right'>
                    <span className='title'>{data.title}</span>
                    <span className='category'>{data.category}</span>
                    <span className='desc'>{data.description}</span>
                    {like ? <BsHeartFill onClick={() => props.handleLike(data)} className='like' /> : <BsHeart onClick={() => props.handleLike(data)} className='like' />}
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