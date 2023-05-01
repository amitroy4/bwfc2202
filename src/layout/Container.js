import React from 'react'

const Container = (props) => {
    return (
        <div className=' max-w-container mx-auto'>{props.children}</div>
    )
}

export default Container