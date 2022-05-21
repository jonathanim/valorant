import React from 'react'

const Weapons = ({ weapons }) => {
    console.log(weapons.data)
    return (
        <div>
            <h1 className='text-center'>All Weapons</h1>
            {weapons.data.map(weapons => {
                return <h1 key={weapons.uuid}>{weapons.displayName}</h1>
            })}
        </div>
    )
}

export default Weapons