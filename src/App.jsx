import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import NewsSection from './news.jsx';
import { Routes, Route, useLocation } from "react-router-dom";
import SashaSection from './sasha.jsx';

function App() {
  const location = useLocation();
  const [section, setSection] = useState("home");

  if (location.pathname === "/sasha") {
    return (
      <div className="app">
        <header className="header">
          <div className="container header-inner">
            <h1 className="logo">СНТ Новое Вельяминово</h1>
            <a href="/" className="nav-button">← На главную</a>
          </div>
        </header>
        <main className="main">
          <div className="container">
            <SashaSection />
          </div>
        </main>
        <footer className="footer">
          <div className="container"><p>СНТ Новое Вельяминово</p></div>
        </footer>
      </div>
    );
  }
  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <h1 className="logo">СНТ Новое Вельяминово</h1>

          <nav className="nav">
            <button
              type="button"
              className={section === "home" ? "nav-button active" : "nav-button"}
              onClick={() => setSection("home")}
            >
              Главная
            </button>

            <button
              type="button"
              className={section === "news" ? "nav-button active" : "nav-button"}
              onClick={() => setSection("news")}
            >
              Новости
            </button>

            <button
              type="button"
              className={section === "info" ? "nav-button active" : "nav-button"}
              onClick={() => setSection("info")}
            >
              Информация
            </button>

            <button
              type="button"
              className={section === "live" ? "nav-button active" : "nav-button"}
              onClick={() => setSection("live")}
            >
              Вельяминово LIVE
            </button>

            <button
              type="button"
              className={section === "donate" ? "nav-button active" : "nav-button"}
              onClick={() => setSection("donate")}
            >
              Поддержите нас!
            </button>

            <button
              type="button"
              className={section === "velyminovobank" ? "nav-button active" : "nav-button"}
              onClick={() => setSection("velyminovobank")}
            >
              Вельяминово банк
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {section === "home" && (
            <HomeSection
              openNews={() => setSection("news")}
              openInfo={() => setSection("info")}
            />
          )}

          {section === "news" && <NewsSection />}

          {section === "info" && <InfoSection />}

          {section === "live" && <LiveSection />}

          {section === "velyminovobank" && <VelyminovobankSection />}

          {section === "donate" && <DonateSection />}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>СНТ Новое Вельяминово</p>
        </div>
      </footer>
    </div>
  );
}

function HomeSection({ openNews, openInfo }) {
  return (
    <section className="section">
      <div className="hero card">
        <h2 className="section-title">Добро пожаловать</h2>

        <p className="section-text">
          Неофициальная страница СНТ Новое Вельяминово. Здесь размещаются
          новости товарищества и полезная информация для жителей.
        </p>

        <div className="button-row">
          <button type="button" className="button button-green" onClick={openNews}>
            Новости
          </button>

          <button type="button" className="button button-blue" onClick={openInfo}>
            Информация о СНТ
          </button>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <img 
            src="/kartinka-raspberry.webp" 
            alt="Свежая малина с куста в СНТ Новое Вельяминово" 
            width="150" 
            height="150"
            loading="lazy"
            title="Урожай малины 2026"
        />
          <h3>Новости</h3>
          <p>Свежие объявления, отключения, собрания и новости СНТ.</p>
        </div>

        <div className="card">
          <h3>Информация</h3>
          <p>Сведения о товариществе, контакты и полезные данные.</p>
        </div>
      </div>
    </section>
  );
}

const PLAYBACK_RATES = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) return "00:00";

  const total = Math.floor(value);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

function VolumeHighIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}

function VolumeMuteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  );
}

function FullscreenEnterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
    </svg>
  );
}

function FullscreenExitIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
    </svg>
  );
}

export function LiveSection() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const progressRef = useRef(null);
  const hideTimer = useRef(null);
  const clickTimer = useRef(null);
  const draggingRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [rate, setRate] = useState(1);
  const [hover, setHover] = useState(null);
  const [dragging, setDragging] = useState(false);

  const isLive = duration === Infinity;

  const showControls = useCallback(() => {
    setControlsVisible(true);
    clearTimeout(hideTimer.current);

    if (playing && !settingsOpen && !dragging) {
      hideTimer.current = setTimeout(() => {
        setControlsVisible(false);
      }, 2400);
    }
  }, [playing, settingsOpen, dragging]);

  useEffect(() => {
    if (!playing || settingsOpen || dragging) {
      clearTimeout(hideTimer.current);
      setControlsVisible(true);
      return;
    }

    showControls();

    return () => {
      clearTimeout(hideTimer.current);
    };
  }, [playing, settingsOpen, dragging, showControls]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume;
    video.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = rate;
  }, [rate]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;

    const closeSettings = () => {
      setSettingsOpen(false);
    };

    document.addEventListener("click", closeSettings);

    return () => {
      document.removeEventListener("click", closeSettings);
    };
  }, [settingsOpen]);

  useEffect(() => {
    return () => {
      clearTimeout(hideTimer.current);
      clearTimeout(clickTimer.current);
    };
  }, []);

  const focusPlayer = useCallback(() => {
    playerRef.current?.focus({ preventScroll: true });
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      if (video.ended) {
        video.currentTime = 0;
      }

      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    const player = playerRef.current;
    const video = videoRef.current;

    if (!player) return;

    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
      return;
    }

    if (player.requestFullscreen) {
      player.requestFullscreen().catch(() => {});
      return;
    }

    if (video?.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev);
  }, []);

  const skip = useCallback((seconds) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    const nextTime = Math.max(0, Math.min(video.currentTime + seconds, video.duration));
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  }, []);

  const seekFromClientX = useCallback(
    (clientX) => {
      const video = videoRef.current;
      const bar = progressRef.current;

      if (!video || !bar || !Number.isFinite(duration) || duration <= 0) return;

      const rect = bar.getBoundingClientRect();
      const x = Math.min(Math.max(clientX, rect.left), rect.right);
      const ratio = (x - rect.left) / rect.width;
      const time = ratio * duration;

      video.currentTime = time;
      setCurrentTime(time);
    },
    [duration]
  );

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;

    setDuration(video.duration || 0);
    setVolume(video.volume ?? 1);
    setMuted(video.muted ?? false);
    setCurrentTime(video.currentTime || 0);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || draggingRef.current) return;

    setCurrentTime(video.currentTime);
  };

  const handleBufferProgress = () => {
    const video = videoRef.current;
    if (!video || !video.buffered.length) return;

    let end = 0;

    for (let i = 0; i < video.buffered.length; i += 1) {
      if (video.buffered.start(i) <= video.currentTime && video.buffered.end(i) >= video.currentTime) {
        end = video.buffered.end(i);
        break;
      }

      end = Math.max(end, video.buffered.end(i));
    }

    setBuffered(end);
  };

  const handleVolumeChange = () => {
    const video = videoRef.current;
    if (!video) return;

    setVolume(video.volume);
    setMuted(video.muted);
  };

  const handleSurfaceClick = () => {
    focusPlayer();

    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
      return;
    }

    clickTimer.current = setTimeout(() => {
      togglePlay();
      clickTimer.current = null;
    }, 200);
  };

  const handleSurfaceDoubleClick = () => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }

    toggleFullscreen();
  };

  const handleProgressPointerDown = (event) => {
    if (isLive) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    draggingRef.current = true;
    setDragging(true);
    seekFromClientX(event.clientX);
  };

  const handleProgressPointerMove = (event) => {
    if (isLive) return;

    const bar = progressRef.current;
    if (!bar || !Number.isFinite(duration) || duration <= 0) return;

    const rect = bar.getBoundingClientRect();
    const x = Math.min(Math.max(event.clientX, rect.left), rect.right);
    const ratio = (x - rect.left) / rect.width;
    const time = ratio * duration;

    if (draggingRef.current || event.buttons === 1) {
      seekFromClientX(event.clientX);
    }

    setHover({ left: x, time });
  };

  const handleProgressPointerUp = (event) => {
    if (!draggingRef.current) return;

    draggingRef.current = false;
    setDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleProgressPointerLeave = () => {
    if (!draggingRef.current) {
      setHover(null);
    }
  };

  const handleKeyDown = (event) => {
    const tag = event.target.tagName.toLowerCase();

    if (tag === "input" || tag === "textarea" || tag === "select") return;

    if (tag === "button" && (event.key === " " || event.key === "Enter")) {
      return;
    }

    const key = event.key.toLowerCase();

    if (key === " " || key === "k") {
      event.preventDefault();
      togglePlay();
      showControls();
      return;
    }

    if (key === "m") {
      toggleMute();
      showControls();
      return;
    }

    if (key === "f") {
      toggleFullscreen();
      showControls();
      return;
    }

    if (key === "arrowleft") {
      event.preventDefault();
      skip(-5);
      showControls();
      return;
    }

    if (key === "arrowright") {
      event.preventDefault();
      skip(5);
      showControls();
      return;
    }

    if (key === "arrowup") {
      event.preventDefault();
      setMuted(false);
      setVolume((prev) => Math.min(1, Number((prev + 0.1).toFixed(2))));
      showControls();
      return;
    }

    if (key === "arrowdown") {
      event.preventDefault();
      setVolume((prev) => {
        const next = Math.max(0, Number((prev - 0.1).toFixed(2)));
        if (next === 0) setMuted(true);
        return next;
      });
      showControls();
    }
  };

  const toPercent = (value) => {
    if (!Number.isFinite(duration) || duration <= 0) return 0;
    return Math.max(0, Math.min(100, (value / duration) * 100));
  };

  const progressPercent = toPercent(currentTime);
  const bufferedPercent = toPercent(buffered);

  const styles = `
    .live-section {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
      font-family: Roboto, Arial, sans-serif;
      border: 1px solid #e1e4e8;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .live-section__title {
      font-size: 20px;
      line-height: 1.4;
      margin-bottom: 16px;
      color: #0f0f0f;
      font-weight: 700;
    }

    .live-section__caption {
      font-size: 14px;
      color: #606060;
      margin-top: 12px;
      font-weight: 500;
    }

    .yt-player {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: #000;
      border-radius: 12px;
      overflow: hidden;
      outline: none;
      user-select: none;
    }

    .yt-player:focus-visible {
      box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.35);
    }

    .yt-player video {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }

    .yt-player--controls-hidden {
      cursor: none;
    }

    .yt-player--controls-hidden .yt-player__bottom {
      opacity: 0;
      pointer-events: none;
    }

    .yt-player__bottom {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 4;
      padding: 32px 12px 8px;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.35) 45%, transparent);
      opacity: 1;
      transition: opacity 0.2s ease;
    }

    .yt-player__progress {
      position: relative;
      height: 18px;
      display: flex;
      align-items: center;
      cursor: pointer;
      touch-action: none;
      margin-bottom: 4px;
    }

    .yt-player__progress-track {
      position: relative;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.24);
      overflow: hidden;
      transition: height 0.12s ease;
    }

    .yt-player__progress:hover .yt-player__progress-track {
      height: 5px;
    }

    .yt-player__progress-buffered {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.45);
    }

    .yt-player__progress-played {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: #ff0000;
    }

    .yt-player__progress-tooltip {
      position: absolute;
      bottom: 22px;
      transform: translateX(-50%);
      padding: 4px 8px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.85);
      color: #fff;
      font-size: 12px;
      line-height: 1;
      pointer-events: none;
      white-space: nowrap;
    }

    .yt-player__controls {
      display: flex;
      align-items: center;
      gap: 6px;
      min-height: 40px;
      color: #fff;
    }

    .yt-player__btn {
      width: 36px;
      height: 36px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0.92;
    }

    .yt-player__btn:hover {
      background: rgba(255, 255, 255, 0.12);
      opacity: 1;
    }

    .yt-player__time {
      margin-left: 4px;
      font-size: 13px;
      color: #fff;
      white-space: nowrap;
    }

    .yt-player__volume {
      display: flex;
      align-items: center;
    }

    .yt-player__volume input[type="range"] {
      width: 0;
      opacity: 0;
      accent-color: #fff;
      cursor: pointer;
      transition: width 0.16s ease, opacity 0.16s ease;
    }

    .yt-player__volume:hover input[type="range"],
    .yt-player__volume:focus-within input[type="range"] {
      width: 68px;
      opacity: 1;
      margin-right: 4px;
    }

    .yt-player__right {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 6px;
      position: relative;
    }

    .yt-player__live-badge {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      margin: 0 0 8px;
      padding: 3px 8px;
      border-radius: 4px;
      background: #f00;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .yt-player__big-play {
      position: absolute;
      inset: 0;
      margin: auto;
      z-index: 3;
      width: 74px;
      height: 50px;
      border: 0;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.72);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.12s ease, background 0.12s ease;
    }

    .yt-player__big-play:hover {
      background: rgba(0, 0, 0, 0.84);
      transform: scale(1.03);
    }

    .yt-player__spinner {
      position: absolute;
      inset: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .yt-player__spinner div {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      border: 4px solid rgba(255, 255, 255, 0.22);
      border-top-color: #fff;
      animation: yt-player-spin 0.9s linear infinite;
    }

    .yt-player__error {
      position: absolute;
      inset: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
      font-size: 14px;
    }

    .yt-player__settings-menu {
      position: absolute;
      right: 0;
      bottom: 46px;
      z-index: 30;
      min-width: 190px;
      padding: 8px 0;
      border-radius: 10px;
      background: rgba(28, 28, 28, 0.96);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(6px);
    }

    .yt-player__settings-title {
      padding: 8px 16px;
      color: #aaa;
      font-size: 12px;
    }

    .yt-player__settings-menu button {
      width: 100%;
      border: 0;
      background: transparent;
      color: #eee;
      padding: 9px 16px;
      text-align: left;
      font-size: 14px;
      cursor: pointer;
    }

    .yt-player__settings-menu button:hover {
      background: rgba(255, 255, 255, 0.08);
    }

    .yt-player__settings-menu button.active {
      color: #3ea6ff;
      font-weight: 700;
    }

    @keyframes yt-player-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 640px) {
      .yt-player__time {
        font-size: 12px;
      }

      .yt-player__volume input[type="range"] {
        display: none;
      }
    }
  `;

  return (
    <section className="section live-section">
      <style>{styles}</style>

      <h1 className="live-section__title">Зима</h1>

      <div
        ref={playerRef}
        className={`yt-player ${
          controlsVisible ? "yt-player--controls-visible" : "yt-player--controls-hidden"
        }`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={showControls}
        onMouseMove={showControls}
        onMouseLeave={() => {
          if (playing && !settingsOpen && !dragging) {
            setControlsVisible(false);
          }
        }}
      >
        <video
          ref={videoRef}
          src="/2.mp4"
          className="yt-player__video"
          preload="metadata"
          playsInline
          onClick={handleSurfaceClick}
          onDoubleClick={handleSurfaceDoubleClick}
          onPlay={() => {
            setPlaying(true);
            showControls();
          }}
          onPause={() => {
            setPlaying(false);
            setControlsVisible(true);
            clearTimeout(hideTimer.current);
          }}
          onEnded={() => {
            setPlaying(false);
            setControlsVisible(true);
          }}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onDurationChange={handleLoadedMetadata}
          onProgress={handleBufferProgress}
          onVolumeChange={handleVolumeChange}
          onWaiting={() => setWaiting(true)}
          onPlaying={() => setWaiting(false)}
          onCanPlay={() => setWaiting(false)}
          onError={() => {
            setHasError(true);
            setWaiting(false);
            setPlaying(false);
          }}
        />

        {waiting && !hasError && (
          <div className="yt-player__spinner">
            <div />
          </div>
        )}

        {!playing && !waiting && !hasError && (
          <button
            type="button"
            className="yt-player__big-play"
            aria-label="Воспроизвести"
            onClick={() => {
              focusPlayer();
              togglePlay();
            }}
          >
            <PlayIcon />
          </button>
        )}

        {hasError && <div className="yt-player__error">Не удалось загрузить видео</div>}

        <div className="yt-player__bottom">
          {isLive ? (
            <div className="yt-player__live-badge">LIVE</div>
          ) : (
            <div
              ref={progressRef}
              className="yt-player__progress"
              onPointerDown={handleProgressPointerDown}
              onPointerMove={handleProgressPointerMove}
              onPointerUp={handleProgressPointerUp}
              onPointerCancel={handleProgressPointerUp}
              onPointerLeave={handleProgressPointerLeave}
            >
              <div className="yt-player__progress-track">
                <div
                  className="yt-player__progress-buffered"
                  style={{ width: `${bufferedPercent}%` }}
                />
                <div
                  className="yt-player__progress-played"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {hover && (
                <div
                  className="yt-player__progress-tooltip"
                  style={{ left: `${hover.left}px` }}
                >
                  {formatTime(hover.time)}
                </div>
              )}
            </div>
          )}

          <div className="yt-player__controls">
            <button
              type="button"
              className="yt-player__btn"
              aria-label={playing ? "Пауза" : "Воспроизвести"}
              onClick={togglePlay}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>

            <div className="yt-player__volume">
              <button
                type="button"
                className="yt-player__btn"
                aria-label={muted ? "Включить звук" : "Выключить звук"}
                onClick={toggleMute}
              >
                {muted || volume === 0 ? <VolumeMuteIcon /> : <VolumeHighIcon />}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={muted ? 0 : volume}
                aria-label="Громкость"
                onChange={(event) => {
                  const nextVolume = Number(event.target.value);
                  setVolume(nextVolume);
                  setMuted(nextVolume === 0);
                }}
              />
            </div>

            <div className="yt-player__time">
              {isLive
                ? "В эфире"
                : `${formatTime(currentTime)} / ${formatTime(duration)}`}
            </div>

            <div className="yt-player__right">
              <div className="yt-player__settings-wrap">
                <button
                  type="button"
                  className="yt-player__btn"
                  aria-label="Настройки"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSettingsOpen((prev) => !prev);
                  }}
                >
                  <SettingsIcon />
                </button>

                {settingsOpen && (
                  <div
                    className="yt-player__settings-menu"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="yt-player__settings-title">
                      Скорость воспроизведения
                    </div>

                    {PLAYBACK_RATES.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={rate === item ? "active" : ""}
                        onClick={() => {
                          setRate(item);
                          setSettingsOpen(false);
                        }}
                      >
                        {item === 1 ? "Обычная" : item}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                className="yt-player__btn"
                aria-label={
                  fullscreen
                    ? "Выйти из полноэкранного режима"
                    : "Полноэкранный режим"
                }
                onClick={toggleFullscreen}
              >
                {fullscreen ? <FullscreenExitIcon /> : <FullscreenEnterIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="live-section__caption">Вельяминово LIVE</p>
    </section>
  );
}


function InfoSection() {
  return (
    <section className="section">
      <h2 className="section-title">Информация о СНТ</h2>

      <div className="info-grid">
        <div className="card">
          <h3>О товариществе</h3>
          <p>
            СНТ Новое Вельяминово — садоводческое некоммерческое товарищество.
            Здесь размещается информация для собственников участков и жителей.
          </p>
        </div>

        <div className="card">
          <h3>Контакты</h3>
          <p>?</p>
          <p>?</p>
        </div>

        <div className="card">
          <h3>Режим работы</h3>
          <p>Сайт: без ограничения</p>
          <p>СНТ: 24/7</p>
        </div>

        <div className="card">
          <h3>Документы</h3>
          <p>
            Посёлок СНТ Новое Вельяминово - документ о СНТ
          </p>
        </div>
      </div>
    </section>
  );
}




function VelyminovobankSection() {
  return (
    <section
      className="section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: '32px',
        padding: '20px',
      }}
    >
      {/* 1. Поисковая строка — посетитель сам ищет любой маршрут */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>
          🔍 Поиск маршрута и билетов
        </h3>
        <iframe
          src="https://rasp.yandex.ru/informers/widgets/search/horiz/"
          title="Яндекс Расписания — поиск маршрута"
          width="700"
          height="110"
          frameBorder="0"
          style={{
            border: '0',
            overflow: 'hidden',
            maxWidth: '100%',
            boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5)',
            borderRadius: '8px',
          }}
          loading="lazy"
        />
      </div>

      {/* 2. Готовое расписание: Вельяминово → Москва */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>
          🚂 Вельяминово → Москва (Павелецкий вокзал)
        </h3>
        <iframe
          src="https://rasp.yandex.ru/informers/v2/search/?fromId=s9602029&toId=c213&size=25&color=1"
          title="Расписание электричек Вельяминово — Москва"
          width="700"
          height="1191"
          frameBorder="0"
          style={{
            border: '0',
            overflow: 'hidden',
            maxWidth: '100%',
            boxShadow: '0 2px 3px rgba(0, 0, 0, 0.5)',
            borderRadius: '8px',
          }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

function DonateSection() {
  const [amount, setAmount] = useState('500');
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) return;

    setIsLoading(true);

    // Имитируем отправку данных на сервер / платежный шлюз
    setTimeout(() => {
      setIsLoading(false);
      // Перенаправляем пользователя на about:blank после "успешной оплаты"
      window.location.href = 'about:blank';
    }, 1500); 
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Поддержать проект 💜</h2>
      <p style={styles.text}>
        Ваше пожертвование поможет нам развивать сайт и выпускать новые обновления.
      </p>
      
      <form onSubmit={handleDonate} style={styles.form}>
        <div style={styles.inputGroup}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Сумма"
            min="10"
            disabled={isLoading}
            style={styles.input}
          />
          <span style={styles.currency}>₽</span>
        </div>

        <button 
          type="submit" 
          disabled={isLoading} 
          style={{
            ...styles.button,
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Обработка...' : 'Поддержать'}
        </button>
      </form>
    </section>
  );
}

// Простые стили для демонстрации
const styles = {
  section: {
    padding: '40px 20px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  },
  title: {
    margin: '0 0 10px 0',
    color: '#333'
  },
  text: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    padding: '12px 40px 12px 12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  currency: {
    position: 'absolute',
    right: '15px',
    color: '#999',
    fontSize: '16px'
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#6200ee',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    transition: 'background-color 0.2s'
  }
};

export default App;
