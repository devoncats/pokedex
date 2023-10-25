import React, { useRef, useState } from 'react'

export default function Filters () {
  const ORDERS = ['Ascending', 'Descending', 'A-Z', 'Z-A']

  const [open, setOpen] = useState(false)
  const [order, setOrder] = useState(ORDERS[0])

  const orderRef = useRef()
  const menuRef = useRef()

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== orderRef.current) setOpen(false)
  })

  return (
    <section className='mb-12'>
      <button className='flex font-bold' onClick={() => setOpen(!open)} ref={orderRef}> {order} <span className='relative flex items-center icon-down top-1 left-2' /></button>

      <ul className='absolute top-[21rem] bg-white w-fit z-50 rounded-xl shadow' ref={menuRef}>
        {open &&
          ORDERS.map((item, index) => (
            <li className='w-32 px-2' key={index}>
              <button onClick={() => setOrder(item)}>{item}</button>
              {
                index !== ORDERS.length - 1 && (<hr />)
              }
            </li>
          ))}
      </ul>
    </section>
  )
}
