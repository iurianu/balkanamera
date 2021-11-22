import React, { useState, useEffect } from 'react';

const useMultiAudio = urls => {
  const [sources] = useState(
    urls.map(url => {
      return {
        url,
        audio: new Audio(url),
      }
    }),
  )

  const [players, setPlayers] = useState(
    urls.map(url => {
      return {
        url,
        playing: false,
      }
    }),
  )

  const toggle = targetIndex => () => {
    const newPlayers = [...players]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false
      newPlayers[targetIndex].playing = true
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false
    } else {
      newPlayers[targetIndex].playing = true
    }
    setPlayers(newPlayers)
  }

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause()
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [])

  return [players, toggle]
}

const SatchmoRevival = ({ urls }) => {
  const [players, toggle] = useMultiAudio(urls)

  return (
      <>  
        <ul className="col-12 col-md-8 pt-md-3">
            {players.map((player, i) => (
                <Player key={i} player={player} toggle={toggle(i)} />
            ))}
      </ul>
      </>
  )
}

const Player = ({ player, toggle }) => (
  <li>
        <button 
            className="btn" 
            type="button"
            onClick={toggle}>{player.playing ? '||' : '>'}
        </button>
        <span className="d-none">{player.url}</span>
    </li>
)


export default SatchmoRevival;