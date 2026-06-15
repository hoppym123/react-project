import { useEffect, useRef, useState, useCallback } from 'react'
import image1 from '../assets/image.png'
import geraldProgress from '../assets/Gerald in progress.jpeg'
import casementWindow from '../assets/casement window.jpeg'
import completeRoof from '../assets/completeRoof.jpeg'
import tDesign from '../assets/t design casement.jpeg'
import roofingProgress from '../assets/roofing in progress.jpeg'


const images = [
  {
    src: image1,
    alt: 'gerald roofing',
    title: 'Gerald Roofs',
    caption: 'Premium roofing materials and modern finish.',
  },
  {
    src: geraldProgress,
    alt: 'Construction workers installing roofing',
    title: 'Expert Installation',
    caption: 'Professional craftsmanship from start to finish.',
  },
  {
    src: casementWindow,
    alt: 'Aluminum casement window installation',
    title: 'Casement Aluminum Window',
    caption: 'Stylish, durable aluminum windows for your property.',
  },
  {
    src: completeRoof,
    alt: 'Aerial view of a completed roof',
    title: 'Roofing Projects',
    caption: 'Completed projects that showcase quality and durability.',
  },
  {
    src: tDesign,
    alt: 'Windows with t-design aluminum frames',
    title: 'T Design Casement Window',
    caption: 'Variant options available.',
  },
  {
    src: roofingProgress,
    alt: 'Roofing work in progress',
    title: 'Roofing in Progress',
    caption: 'Durable roofing installation performed by the team.',
  },
]

export default function FullScreenGallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const overlayRef = useRef(null)

  const toggleFullscreen = useCallback(async () => {
    if (!overlayRef.current) return
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else {
      await overlayRef.current.requestFullscreen()
    }
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex(prev => (prev + 1) % images.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex(prev => (prev + images.length - 1) % images.length)
      }
      if (event.key === 'f' || event.key === 'F') {
        event.preventDefault()
        toggleFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleFullscreen, activeIndex])

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
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="text-xl uppercase tracking-[0.35em] text-amber-200">Project Gallery</p>
      
          </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl transition hover:-translate-y-1 hover:border-amber-200/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
          <div className="absolute inset-0 bg-black/80" onClick={() => setActiveIndex(null)} aria-hidden="true" />
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-6 top-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-white/15"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex(prev => (prev + images.length - 1) % images.length)}
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
            onClick={() => setActiveIndex(prev => (prev + 1) % images.length)}
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
