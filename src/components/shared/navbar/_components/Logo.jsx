import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return <>
        <Link to="/">
            <img src="/logos/full-logo.png" alt="Notion" width={200} height={250} className='w-32' />
        </Link>
    </>
}

export default Logo