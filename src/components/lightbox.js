import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

function Lightbox(props) {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, [])

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }

    // use the prop `photoSet` to fetch the set of photos to be used from photos.js
    return (
        <div>
            <Gallery photos={props.photoSet} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={props.photoSet}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}

export default Lightbox
