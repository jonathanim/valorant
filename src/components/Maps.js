import React from 'react'

const Maps = ({ maps }) => {

    return (
        <div>
            <h1 className='text-center'>All Maps</h1>
            {maps.data.map(m => {
                return <h1 key={m.uuid}>{m.displayName}</h1>
            })}
        </div>
    )
}

export default Maps