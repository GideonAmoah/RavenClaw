import React from 'react'
import imag from '/public/discussions.jpg'


export default function ArticleCard(props) {
    const date  = new Date(props.publishedAt)
    return (
    <div className='rounded-lg'>
        <div className='shadow-lg rounded-lg  '>
            <img
                src={props.urlToImage ? props.urlToImage : imag}
                alt="news articles"
                width={500}
                className='h-[20vh] object-cover'
            />
            <div className='flex flex-col gap-2  p-4'>
                <h2 className='text-xs font-extrabold'>{props.title}</h2>
                <h4 className='text-[12px] font-extrabold text-right'>{props.author}</h4>
                
                <p className='text-[12px] font-bold '>{date.toLocaleDateString()}</p>
                <button className='border border-green-500 rounded-lg tracking-wide  capitalize'>read more</button>
            </div>
        </div>
    </div>
  )
}
