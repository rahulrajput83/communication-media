import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';

const select = [1, 2, 3, 4, 5]
function Item({e, i, setCart, cart}) {
    const [show, setShow] = useState(false)
    
    const handlePlus = (index, value) => {
        let data = [...cart];
        data[index].qty = value || 1
        setCart(data)
        setShow(false)
    }
  return (
    <div key={`cart${i}`} className='Item'>
                        <img src={e.thumbnail} alt={e.title} />
                        <div className='right'>
                            <span className='title'>{e.title}</span>
                            <span className='category'>{e.category}</span>
                            <div className='qty'>
                                <span>{e.qty || 1}</span>
                                <div className='drop' onClick={() => setShow(!show)}>
                                    <span>Select</span>
                                    <FaAngleDown />
                                </div>
                                {show ? <div className='select'>
                                    {select.map((seletI, selI) => {
                                        return (
                                            <span onClick={() => handlePlus(i, seletI)} key={`select${selI}`}>{seletI}</span>
                                        )
                                    })}
                                </div>
                                 : null}
                            </div>

                        </div>

                    </div>
  )
}

export default Item