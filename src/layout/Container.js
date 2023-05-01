import React from 'react'

const Container = (props) => {
    return (
        <div className=' max-w-container mx-auto bg-red-200'>{props.children}</div>
    )
}

export default Container