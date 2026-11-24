'use client';

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Play } from 'lucide-react';
import { videoPoster, posterFallback, type PlanesVideo } from './video';

/**
 * El video del anuncio, liviano: hasta que la persona toca «play» solo se carga una imagen (≈100 KB).
 * Recién ahí se abre el reproductor del servicio donde está el video. Así la página carga igual de rápido
 * y el video no consume nada de Vercel.
 */
export default function VideoPlayer({ video, duration }: { video: PlanesVideo; duration?: string }) {
  const [on, setOn] = useState(false);
  const poster = videoPoster(video);
  return (
    <div className="pv-video">
      {on ? (
        video.kind === 'iframe' ? (
          <iframe src={video.src} title="Cirelia: tu negocio en un solo panel" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen className="absolute inset-0 w-full h-full" />
        ) : (
          <video src={video.src} poster={poster} controls autoPlay playsInline className="absolute inset-0 w-full h-full bg-black" />
        )
      ) : (
        <button type="button" onClick={() => setOn(true)} className="pv-video-cover" aria-label="Reproducir el video de Cirelia">
          <img src={poster} onError={posterFallback} alt="" width={1365} height={768} loading="eager" decoding="async" />
          <span className="pv-video-shade" aria-hidden />
          <span className="pv-video-play" aria-hidden><Play size={26} fill="currentColor" /></span>
          <span className="pv-video-label">
            <span className="font-semibold">Mirá cómo funciona</span>
            {duration && <span className="opacity-75 pv-num"> · {duration}</span>}
          </span>
        </button>
      )}
    </div>
  );
}
