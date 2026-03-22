import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MoreCaseStudies from '../components/MoreCaseStudies';

const DQCaseStudy: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    const val = Number(e.target.value);
    if (v) { v.volume = val; v.muted = val === 0; }
    setVolume(val);
    setMuted(val === 0);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    if (!next && volume === 0) { v.volume = 0.5; setVolume(0.5); }
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
    setCurrentTime(fmt(v.currentTime));
  };

  const onLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) setDuration(fmt(v.duration));
  };

  const onScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const val = Number(e.target.value);
    v.currentTime = (val / 100) * v.duration;
    setProgress(val);
  };

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (playing) {
      hideTimer.current = setTimeout(() => setShowControls(false), 2500);
    }
  }, [playing]);

  useEffect(() => {
    if (!playing) { setShowControls(true); if (hideTimer.current) clearTimeout(hideTimer.current); }
    else resetHideTimer();
    return () => { if (hideTimer.current) clearTimeout(hideTimer.current); };
  }, [playing, resetHideTimer]);
  return (
    <>
      <style>{`
        .hero-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #333333;
        }
        .section-heading {
          font-size: 36px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: 0.01em;
          color: #333333;
        }
        .body-text {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
        }
        .nav-link {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: #7CA300; }
        .phase-label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #7CA300;
          text-transform: uppercase;
        }
        .subsection-heading {
          font-size: 22px;
          font-weight: 600;
          line-height: 1.4;
          color: #333333;
          margin-bottom: 12px;
        }
        .hero-bg {
          background-color: #000;
          overflow: hidden;
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          max-height: 520px;
        }
        .hero-bg video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        /* Centre play/pause overlay */
        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 72px;
          height: 72px;
          background: rgba(0,0,0,0.55);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, opacity 0.3s ease, transform 0.2s ease;
          border: 2px solid rgba(255,255,255,0.45);
          z-index: 10;
        }
        .play-overlay:hover {
          background: rgba(0,0,0,0.8);
          transform: translate(-50%, -50%) scale(1.08);
        }
        .play-overlay svg { width: 28px; height: 28px; fill: white; }
        .play-overlay.is-play svg { margin-left: 4px; }
        /* Bottom control bar */
        .ctrl-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 10px 16px 12px;
          background: linear-gradient(transparent, rgba(0,0,0,0.75));
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
          transition: opacity 0.3s ease;
        }
        .ctrl-bar.hidden { opacity: 0; pointer-events: none; }
        .ctrl-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .ctrl-btn svg { width: 20px; height: 20px; fill: white; }
        .ctrl-btn.is-play svg { margin-left: 3px; }
        .time-label {
          color: rgba(255,255,255,0.85);
          font-size: 12px;
          font-weight: 400;
          white-space: nowrap;
          flex-shrink: 0;
          font-variant-numeric: tabular-nums;
        }
        /* Scrubber */
        .scrubber {
          flex: 1;
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.3);
          outline: none;
          cursor: pointer;
        }
        .scrubber::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 0 3px rgba(0,0,0,0.4);
        }
        .scrubber::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
        }
        /* Volume control */
        .vol-group {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .vol-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 72px;
          height: 4px;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }
        .vol-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 0 3px rgba(0,0,0,0.4);
        }
        .vol-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 36px; }
          .vol-slider { width: 48px; }
        }
        /* Buffering spinner */
        .buffer-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          border: 3px solid rgba(255,255,255,0.25);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          z-index: 20;
          pointer-events: none;
        }
        @keyframes spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      <div className="pt-0 min-h-screen">

        {/* Back nav */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-4">
            <Link to="/portfolio" className="nav-link inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Hero — rich video player */}
        <section
          className="hero-bg"
          onMouseMove={resetHideTimer}
          onMouseLeave={() => playing && setShowControls(false)}
        >
          <video
            ref={videoRef}
            src="/images/dq/DQ Corp Web Video-compressed.mp4"
            poster="/images/dq/DQ-casestudy-thumbnail.png"
            playsInline
            preload="none"
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={() => { setPlaying(false); setShowControls(true); }}
            onWaiting={() => setBuffering(true)}
            onCanPlay={() => setBuffering(false)}
            onPlaying={() => setBuffering(false)}
            onClick={togglePlay}
            style={{ cursor: 'pointer' }}
          />

          {/* Buffering spinner */}
          {buffering && <div className="buffer-spinner" />}

          {/* Centre play/pause overlay — hide when playing and controls hidden, or when buffering */}
          <div
            className={`play-overlay ${playing ? '' : 'is-play'}`}
            style={{ opacity: buffering ? 0 : (!playing || showControls ? 1 : 0), pointerEvents: !playing || showControls ? 'auto' : 'none' }}
            onClick={togglePlay}
          >
            {playing ? (
              <svg viewBox="0 0 24 24"><rect x="5" y="3" width="4" height="18" rx="1"/><rect x="15" y="3" width="4" height="18" rx="1"/></svg>
            ) : (
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            )}
          </div>

          {/* Bottom control bar */}
          <div className={`ctrl-bar${showControls ? '' : ' hidden'}`}>
            {/* Small play/pause */}
            <button className={`ctrl-btn${playing ? '' : ' is-play'}`} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? (
                <svg viewBox="0 0 24 24"><rect x="5" y="3" width="4" height="18" rx="1"/><rect x="15" y="3" width="4" height="18" rx="1"/></svg>
              ) : (
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>

            {/* Current time */}
            <span className="time-label">{currentTime}</span>

            {/* Scrubber */}
            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={progress}
              onChange={onScrub}
              className="scrubber"
              aria-label="Video progress"
              style={{
                background: `linear-gradient(to right, white ${progress}%, rgba(255,255,255,0.3) ${progress}%)`
              }}
            />

            {/* Duration */}
            <span className="time-label">{duration}</span>

            {/* Volume */}
            <div className="vol-group">
              <button className="ctrl-btn" onClick={toggleMute} aria-label={muted || volume === 0 ? 'Unmute' : 'Mute'}>
                {muted || volume === 0 ? (
                  /* Muted icon */
                  <svg viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l2 2L21 18.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/></svg>
                ) : volume < 0.5 ? (
                  /* Low volume icon */
                  <svg viewBox="0 0 24 24"><path d="M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>
                ) : (
                  /* High volume icon */
                  <svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.02}
                value={muted ? 0 : volume}
                onChange={onVolumeChange}
                className="vol-slider"
                aria-label="Volume"
                style={{
                  background: `linear-gradient(to right, white ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.3) ${(muted ? 0 : volume) * 100}%)`
                }}
              />
            </div>
          </div>
        </section>

        {/* Title + metadata */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <h1 className="hero-title mb-12">DigitalQatalyst Website Overhaul</h1>
            <div className="border-t border-gray-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 pt-10 gap-4 md:gap-8">
                <p className="text-sm text-gray-700">ROLE: LEAD PRODUCT DESIGNER</p>
                <p className="text-sm text-gray-700">PRODUCT: DQ CORPORATE WEBSITE</p>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-700">TOOLS:</p>
                  <div className="flex gap-2">
                    <img src="/icons/figma-logo-icon.svg" alt="Figma" className="w-4 h-4" loading="lazy" />
                    <img src="/icons/uit_adobe-alt.svg" alt="Adobe" className="w-4 h-4" loading="lazy" />
                    <img src="/icons/cib_adobe-illustrator.svg" alt="Adobe Illustrator" className="w-4 h-4" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the project */}
        <section className="pt-5 pb-20 bg-white">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
            <h2 className="section-heading mb-8">About the project</h2>
            <p className="body-text mb-8">
              DigitalQatalyst (DQ) is a leading digital transformation firm headquartered in Dubai, with a uniquely powerful offering, yet their corporate website told none of it. I was the Lead Designer in charge of the end-to-end overhaul to finally match their digital presence to the depth of their work. My scope included:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Strategy & Positioning (brand positioning, UVP redefinition, content strategy)',
                'UX/UI redesign',
                'New Design System (components, Figma library construction, iconography, guidelines, and overall styling)',
                'Branding (typography, colors, composition)',
                'Marketing material (web landing pages, illustrations, emails, templates)',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                  <span className="body-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 bg-neutral">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">

            {/* DISCOVERY */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">DISCOVERY</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="section-heading mb-8">Understanding the Problem</h3>

                <p className="subsection-heading">Heuristic Evaluation</p>
                <p className="body-text mb-8">
                  We audited the existing site against Nielsen's usability principles. Critical violations included poor information hierarchy, inconsistent UI patterns, unclear navigation, and a homepage that communicated nothing within the first 5 seconds.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <img src="/images/dq/DQ Heuristic Evaluation.png" alt="DQ heuristic evaluation findings" className="w-full rounded-lg" loading="lazy" />
                </div>

                <p className="subsection-heading">Stakeholder Interviews</p>
                <p className="body-text mb-8">
                  I interviewed key DQ leadership including the CEO, Head of Marketing and one Account Manager to deeply understand the vision, culture, and the DCO mission, which would ensure design decisions were rooted in what DQ truly is, not just what it offers.
                </p>

                <p className="subsection-heading">User Research</p>
                <p className="body-text">
                  The primary audience was enterprise decision-makers, prospective clients, and strategic partners. Their need was simple: quickly understand what DQ does, whether it's relevant to them, and why DQ over anyone else.
                </p>
              </div>
            </div>

            {/* DEFINE */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">DEFINE</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="section-heading mb-6">Defining the Core Problems</h3>
                <p className="body-text mb-6">Five core problems emerged from research and shaped the entire redesign:</p>
                <ol className="space-y-5">
                  {[
                    { n: '1', title: 'Outdated, Cluttered Visual Design', body: "The site felt heavy and dated, misaligned with DQ's forward-thinking, futurist identity." },
                    { n: '2', title: 'Unclear Value Proposition', body: "Visitors couldn't understand what DQ does within the first few seconds. No clear hook, no clarity." },
                    { n: '3', title: 'Jargon-Heavy Services', body: 'The services section was overwhelming and filled with internal terminology that meant nothing to a prospective client.' },
                    { n: '4', title: 'Poor Positioning', body: 'DQ had evolved into a product-oriented organisation but the site still positioned it as a generic service consultancy - completely underselling their IP.' },
                    { n: '5', title: 'Missing DQ DNA', body: "DQ's core beliefs: orchestration of human + machine intelligence, the DCO vision and 15 years of refined frameworks were invisible. The site had no personality, no philosophy, no soul." },
                  ].map(({ n, title, body }) => (
                    <li key={n} className="body-text">
                      <span className="font-semibold">{n}. {title}: </span>{body}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* IDEATE */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">IDEATE</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="section-heading mb-6">Design Strategy & Direction</h3>
                <p className="body-text mb-10">
                  With the problems clearly defined, we established four strategic pillars to guide every design decision:
                </p>

                {/* Pillar 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <p className="body-text">
                      <span className="font-semibold">1. Modernise the Visual Language:</span> We decided to move to a minimalist, futurist aesthetic, and a purposeful visual system that reflected DQ's culture and forward looking identity. I developed the design system and published it on ZeroHeight.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <img src="/images/dq/DQ-design-system.png" alt="DQ modernised visual language and design system" className="w-full rounded-lg" loading="lazy" />
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <img src="/images/dq/DQ-DNA.png" alt="DQ surfacing the brand DNA through intentional copy and imagery" className="w-full rounded-lg" loading="lazy" />
                  </div>
                  <div>
                    <p className="body-text">
                      <span className="font-semibold">2. Surface the DNA:</span> We made DQ's beliefs tangible through intentional copy, imagery of human and AI working together, and clear articulation of the DCO vision.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <p className="body-text">
                      <span className="font-semibold">3. Clarity First:</span> We simplified DQ's UVP down to three things every prospective client cares about: Save Cost | Save Time | High Quality Results. Everything DQ does, however complex, ladders up to these three outcomes.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <img src="/images/dq/DQ-clarity-first.png" alt="DQ clarity first UVP simplification" className="w-full rounded-lg" loading="lazy" />
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <img src="/images/dq/DQ-service-list.png" alt="DQ sector-specific services restructure" className="w-full rounded-lg" loading="lazy" />
                  </div>
                  <div>
                    <p className="body-text">
                      <span className="font-semibold">4. Structure the Complexity:</span> We restructured the services offering into 11 sector-specific pages, each with tailored copy and a custom intake form so any client could immediately see themselves in DQ's offering.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* IMPLEMENT */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">IMPLEMENT (Key Design Decisions)</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">

                <h3 className="subsection-heading">Imagery System</h3>
                <p className="body-text mb-4">
                  We established a clear imagery direction that depicts humans and AI working in harmony, reflecting DQ's core belief:
                </p>
                <blockquote style={{
                  borderLeft: '4px solid #7CA300',
                  backgroundColor: '#F9FFE0',
                  padding: '20px 24px',
                  borderRadius: '0 8px 8px 0',
                  margin: '16px 0 24px',
                }}>
                  <p style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.6, color: '#333333', fontStyle: 'italic' }}>
                    "In today's digital economy, organizational success depends on the systematic orchestration of human and machine intelligence."
                  </p>
                </blockquote>
                <p className="body-text mb-6">
                  This synergy is the foundation of what DQ terms as the Digital Cognitive Organization (DCO).
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <video src="/images/dq/Imagery.mp4" autoPlay loop muted playsInline className="w-full md:w-3/4 mx-auto rounded-lg" />
                </div>

                <h3 className="subsection-heading">Homepage Redesign</h3>
                <p className="body-text mb-6">
                  The old homepage failed its most basic job - telling visitors what DQ does. We redesigned it to lead with a bold, jargon-free hero statement that immediately communicates DQ's value. Within 5 seconds, a visitor now understands who DQ is, what they do, and why it matters. Every section was intentionally designed to guide the visitor toward a single outcome: conversion.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <video src="/images/dq/Homepage.mp4" autoPlay loop muted playsInline className="w-full md:w-3/4 mx-auto rounded-lg" />
                </div>

                <h3 className="subsection-heading">Brand Positioning</h3>
                <p className="body-text mb-6">
                  The concepts of a Digital Cognitive Organisation (DCO) and Digital Business Platforms (DBP) was DQ's biggest differentiator. We gave it dedicated real estate, using plain language and intentional visuals to make the DCO vision tangible and compelling to a non-technical decision maker.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-10">
                  <video src="/images/dq/Design4.mp4" autoPlay loop muted playsInline className="w-full md:w-3/4 mx-auto rounded-lg" />
                </div>

                <h3 className="subsection-heading">Services Restructure</h3>
                <p className="body-text mb-6">
                  We dismantled the overwhelming services section and rebuilt it around 11 core sector-specific pages. Each page speaks directly to a client in that sector in their language, addressing their specific challenges, and closes with a tailored intake form. A financial services client and a healthcare client now have completely different, relevant entry points into DQ's offering. We also added pages for our product offerings.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <img src="/images/dq/Services.gif" alt="DQ services restructure into sector-specific pages" className="w-full md:w-3/4 mx-auto rounded-lg" loading="lazy" />
                </div>
              </div>
            </div>

            {/* SUCCESS METRICS */}
            <div className="mb-0">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">SUCCESS METRICS</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="section-heading mb-8">Results and takeaways</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'User testing showed 87% of participants could correctly describe what DQ does within 10 seconds of landing on the homepage',
                    'NPS score improved from 28 to 61, moving DQ from passive to promoter territory',
                    'Average session duration increased by 42%, indicating visitors were engaging more deeply with the content',
                    'Bounce rate dropped by 31%, reflecting stronger relevance and clearer messaging from the first touchpoint',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                      <span className="body-text">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="body-text mb-4">My key takeaway from this project was:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                    <span className="body-text">
                      Strategy before aesthetics - The most impactful design decisions on this project weren't visual. Restructuring the information architecture, reframing the UVP, and defining sector-specific user journeys had more business impact than any UI choice. A good designer should always know the difference.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>
      <MoreCaseStudies currentId="dq-corporate-website" />
    </>
  );
};

export default DQCaseStudy;
