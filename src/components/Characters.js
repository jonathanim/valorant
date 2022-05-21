import React from 'react'

const Characters = ({ characters }) => {
    console.log(characters)
    return (
        <div>
            <h1 className='text-center'>All Characters</h1>
            {characters.data.map(character => {
                return <h1 key={character.uuid}>{character.displayName}</h1>
            })}
        </div>
    )
}

export default Characters