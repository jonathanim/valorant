import React from 'react'

const CharacterCard = ({ character }) => {
    return (
        <div className='card'>
            <img src={character.fullPortrait} alt={character.displayName} />
            <h2 className='text-center p-2 text-xl'>{character.displayName}</h2>
            <div className="role">
                <p className='text-center p-2 text-xl3'>{character.role.displayName}</p>
            </div>

        </div>
    )
}

export default CharacterCard