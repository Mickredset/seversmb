import { useState } from "react";
import "./App.css";
import NewsSection from './news.jsx';

function App() {
  const [section, setSection] = useState("home");

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

function LiveSection() {
  return (
    <section className="section" style={{
      maxWidth: '900px',
      margin: '20px auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid #e1e4e8',
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h1 style={{
        fontSize: '28px',
        lineHeight: '1.3',
        marginBottom: '20px',
        color: '#050505',
        fontWeight: '800'
      }}>
        Зима
      </h1>

      <div style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: '0',
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: '#000',
        marginBottom: '24px'
      }}>
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: '0'
          }}
          src="/2.mp4"
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <p style={{
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#1c1e21'
      }}>
        Вельяминово LIVE
      </p>
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

export default App;
