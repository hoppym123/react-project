import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const images = [
  {
    src: 'src/assets/image.png',
    alt: 'gerald roofing',
    title: 'gerald roofs',
    caption: 'Premium roofing materials and modern finish.',
  },
  {
    src: 'src/assets/Gerald in progress.jpeg',   
    alt: 'Construction workers installing roofing',
    title: 'Expert Installation',
    caption: 'Professional craftsmanship from start to finish.',
  },
  {
    src: 'src/assets/casement window.jpeg',
    alt: 'Aluminum casement window installation',
    title: 'casement aluminum window',
    caption: 'Stylish, durable aluminum windows  for your property.',
  },
  {
    src: 'src/assets/completeRoof.jpeg',
    alt: 'Aerial view of a completed roof',
    title: 'Roofing Projects',
    caption: 'Completed projects that showcase quality and durability.',
  },
  {
    src: 'src/assets/src/t design casement.jpeg',
    alt: 'windiws with t design aluminum frames',
    title: ' T design casement window',
    caption: 'variant options available .',
  },
  {
    src: 'src/assets/night finish.jpeg',                
    alt: 'Night shot of a house roof and landscape lighting',
    title: 'Night Finish',
    caption: 'Quality roofing work visible day or night.',
  },
]

export default function FullScreenGallery() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const overlayRef = useRef(null)

  const openImage = index => setActiveIndex(index)
  const closeGallery = () => setActiveIndex(null)
  const showPrevious = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + images.length - 1) % images.length)
  }
  const showNext = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % images.length)
  }

  const toggleFullscreen = async () => {
    if (!overlayRef.current) return
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else {
      await overlayRef.current.requestFullscreen()
    }
  }

  useEffect(() => {
    const handleKeyDown = event => {
      if (activeIndex === null) return
      if (event.key === 'Escape') {
        closeGallery()
      }
      if (event.key === 'ArrowRight') {
        showNext()
      }
      if (event.key === 'ArrowLeft') {
        showPrevious()
      }
      if (event.key === 'f' || event.key === 'F') {
        event.preventDefault()
        toggleFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Project Gallery</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
             Photo Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Browse our premium roofing and aluminum work with a fullscreen viewing experience.
            Click any image to expand it, then use arrow keys or the controls to navigate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/projects')} className="rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition-colors">
              View Projects
            </button>
            <button onClick={() => navigate('/services')} className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
              View Services
            </button>
            <button onClick={() => navigate('/contact')} className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openImage(index)}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl transition hover:-translate-y-1 hover:border-amber-200/30"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="space-y-2 p-5 text-left">
                <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-6 sm:px-8"
        >
          <div className="absolute inset-0 bg-black/80" onClick={closeGallery} aria-hidden="true" />
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-6 top-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-white/15"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-3xl text-white transition hover:bg-white/15"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="relative z-10 w-full max-w-6xl">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="mx-auto max-h-[80vh] w-full rounded-3xl object-contain shadow-2xl"
            />
            <div className="mt-6 flex flex-col items-center gap-3 text-center text-slate-200 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{images[activeIndex].title}</h3>
                <p className="mt-2 text-sm text-slate-300">{images[activeIndex].caption}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-300 shadow-inner border border-white/10">
                <span>{activeIndex + 1} of {images.length}</span>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-3xl text-white transition hover:bg-white/15"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
