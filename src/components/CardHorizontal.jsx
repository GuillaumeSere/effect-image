import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiX } from 'react-icons/fi'
import data from '../data/data'

const cardPatterns = [
    { size: 'is-large', drift: 'drift-one', speed: 26 },
    { size: 'is-tall', drift: 'drift-two', speed: 22 },
    { size: 'is-wide', drift: 'drift-three', speed: 28 },
    { size: '', drift: 'drift-four', speed: 24 },
    { size: 'is-tall', drift: 'drift-five', speed: 30 },
    { size: 'is-wide', drift: 'drift-six', speed: 25 },
    { size: '', drift: 'drift-one', speed: 27 },
    { size: 'is-large', drift: 'drift-two', speed: 32 },
]

const shuffleArtworks = (artworks) => [...artworks].sort(() => Math.random() - 0.5)

const CardHorizontal = () => {
    const artworks = useMemo(() => shuffleArtworks(data), [])
    const [selectedIndex, setSelectedIndex] = useState(null)

    const selectedArtwork = selectedIndex !== null ? artworks[selectedIndex] : null

    const closeArtwork = useCallback(() => setSelectedIndex(null), [])
    const showPrevious = useCallback(() => {
        setSelectedIndex((currentIndex) => (
            currentIndex === null ? artworks.length - 1 : (currentIndex - 1 + artworks.length) % artworks.length
        ))
    }, [artworks.length])
    const showNext = useCallback(() => {
        setSelectedIndex((currentIndex) => (
            currentIndex === null ? 0 : (currentIndex + 1) % artworks.length
        ))
    }, [artworks.length])

    useEffect(() => {
        if (!selectedArtwork) {
            document.body.classList.remove('modal-open')
            return undefined
        }

        document.body.classList.add('modal-open')

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeArtwork()
            if (event.key === 'ArrowLeft') showPrevious()
            if (event.key === 'ArrowRight') showNext()
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.classList.remove('modal-open')
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [closeArtwork, selectedArtwork, showNext, showPrevious])

    return (
        <section className={`horizontal-gallery${selectedArtwork ? ' is-previewing' : ''}`} aria-label="Galerie d'art abstrait">
            <div className='horizontal-container'>
                {artworks.map(({ id, image, title }, index) => {
                    const pattern = cardPatterns[index % cardPatterns.length]
                    const rotation = ((index % 7) - 3) * 1.2
                    const artworkTitle = title || `Oeuvre abstraite ${id}`

                    return (
                        <article
                            className={`horizontal-card ${pattern.size} ${pattern.drift}`}
                            key={id}
                            style={{
                                '--card-delay': `${index * -0.65}s`,
                                '--card-rotate': `${rotation}deg`,
                                '--card-rotate-end': `${rotation * -0.8}deg`,
                                '--float-speed': `${pattern.speed}s`,
                            }}
                        >
                            <button
                                className="artwork-button"
                                type="button"
                                onClick={() => setSelectedIndex(index)}
                                aria-label={`Voir ${artworkTitle}`}
                            >
                                <img src={image} alt={artworkTitle} loading="lazy" />
                                <span className="artwork-meta" aria-hidden="true">
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                    <span>{artworkTitle}</span>
                                </span>
                            </button>
                        </article>
                    )
                })}
            </div>

            {selectedArtwork && (
                <div className="artwork-modal" role="dialog" aria-modal="true" aria-label={selectedArtwork.title} onClick={closeArtwork}>
                    <div className="artwork-viewer" onClick={(event) => event.stopPropagation()}>
                        <button className="modal-action modal-close" type="button" onClick={closeArtwork} aria-label="Fermer">
                            <FiX />
                        </button>
                        <button className="modal-action modal-previous" type="button" onClick={showPrevious} aria-label="Oeuvre precedente">
                            <FiChevronLeft />
                        </button>
                        <img src={selectedArtwork.image} alt={selectedArtwork.title} />
                        <button className="modal-action modal-next" type="button" onClick={showNext} aria-label="Oeuvre suivante">
                            <FiChevronRight />
                        </button>
                        <div className="modal-caption">
                            <span>{selectedArtwork.title}</span>
                            <a href={selectedArtwork.image} target="_blank" rel="noreferrer" aria-label="Ouvrir dans un nouvel onglet">
                                <FiExternalLink />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CardHorizontal
