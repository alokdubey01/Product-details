import React from 'react'

export default function Otherquizes() {
    const lists = ["👉Your Future wife","👉Your Future wife","👉Your Future wife","👉Your Future wife","👉Your Future wife","👉Your Future wife"]
  return (
    <div className='bg-sky-50 p-4 rounded-sm mt-10'>
        <h1 className='text-lg font-semibold text-center mb-4'>Let's check other quizes !</h1>
        <ul>
            {lists.map((items, index)=>(
              <li>{items}</li>
            ))}
        </ul>
    </div>
  )
}
