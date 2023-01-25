import React from 'react'
import './Home.css'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { BsStar, BsStarFill } from 'react-icons/bs'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)


function Home({ data, handleLike, handleCart }) {
    

    return (
        <div className='Home'>
            {data.length > 0 && data.map((e, i) => {
                return (
                    <div key={`home-${i}`} className='Item'>
                        <Link to={`/${e.id}`} className='img'>
                            <img src={e.thumbnail} alt={e.title} />
                            <span>HOT</span>
                        </Link>
                        <div className='line'></div>
                        <div className='right'>
                            {e.like ? <BsStarFill className='like' onClick={() => handleLike(e)} /> : <BsStar className='like' onClick={() => handleLike(e)} />}
                            <Link to={`/${e.id}`} className='title'>{e.title}</Link>
                            <Link to={`/${e.id}`} className='category'>{e.category}</Link>
                            <Link to={`/${e.id}`} className='price'>${e.price}</Link>
                            <div className='findline'>
                                <div className='hrdiv'></div>
                            </div>
                            <Link to={`/${e.id}`} className='desc'>
                                <ResponsiveEllipsis
                                    text={e.description}
                                    ellipsis=''
                                    trimRight
                                    basedOn='letters'
                                    maxLine='1'
                                />
                            </Link>
                            
                            <div className='row'>
                                <button onClick={() => handleCart(e)} className='cart'>Add to cart</button>
                                <div className='rating'>
                                    {e.rating.toFixed() === '5' ?
                                        <>
                                            <Rating className='filled' />
                                            <Rating className='filled' />
                                            <Rating className='filled' />
                                            <Rating className='filled' />
                                            <Rating className='filled' />
                                        </>
                                        : e.rating.toFixed() === '4' ?
                                            <>
                                                <Rating className='filled' />
                                                <Rating className='filled' />
                                                <Rating className='filled' />
                                                <Rating className='filled' />
                                                <Rating className='' />
                                            </> :
                                            e.rating.toFixed() === '3' ?
                                                <>
                                                    <Rating className='filled' />
                                                    <Rating className='filled' />
                                                    <Rating className='filled' />
                                                    <Rating className='' />
                                                    <Rating className='' />
                                                </> :
                                                e.rating.toFixed() === '2' ?
                                                    <>
                                                        <Rating className='filled' />
                                                        <Rating className='filled' />
                                                        <Rating className='' />
                                                        <Rating className='' />
                                                        <Rating className='' />
                                                    </> :
                                                    e.rating.toFixed() === '1' ?
                                                        <>
                                                            <Rating className='filled' />
                                                            <Rating className='' />
                                                            <Rating className='' />
                                                            <Rating className='' />
                                                            <Rating className='' />
                                                        </> :
                                                        e.rating.toFixed() === '0' ?
                                                            <>
                                                                <Rating className='' />
                                                                <Rating className='' />
                                                                <Rating className='' />
                                                                <Rating className='' />
                                                                <Rating className='' />
                                                            </> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home