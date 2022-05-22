import React from 'react'
import { Link } from 'react-router-dom'
import CharacterCard from './CharacterCard'
const Characters = ({ characters }) => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl mt-5'>All Characters</h1>
            <div className='grid grid-cols-2 gap-5  md:grid-cols-4'>
                {characters.data.filter(char => char.isPlayableCharacter === true).map(character => {
                    return (
                        <Link key={character.uuid} to={`/characters/${character.uuid}`}>
                            <CharacterCard character={character} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Characters