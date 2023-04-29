import { useEffect, useState } from 'react'
import PagesMetadata from './navigations.json'
import Link from 'next/link'


const Childrens = (props) => {
    return <div className='w-full font-mono font-bold text-lg m-1 ml-3 mb-0'>
        <Link href={props.slug}>
            {props.title}
        </Link>
    </div>
}

const Parent = (props) => {
    return <div className='w-full font-mono font-bold text-lg m-1 ml-3 mb-0'>
        {props.title}
        {props.children.map(item =>
            <div key={item}> {Childrens(item)} </div>
        )}
    </div>
}

const Navigation = () => {
    return (
        <div className='flex flex-wrap'>
            <div className='w-full flex flex-wrap ml-5'>
                {PagesMetadata.map(item => Parent(item))}
            </div>
        </div>
    )
}

export default Navigation