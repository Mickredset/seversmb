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
  const collected = 12;
  const target = 20350;
  const percentage = Math.min(100, Math.round((collected / target) * 100));

  return (
    <section className="section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }} >
      <div style={{ width: '200px', height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxSizing: 'border-box' }} >
        
        {/* Блок баланса */}
        <span style={{ fontSize: '14px', color: '#666' }}>Ваш баланс</span>
        <span style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '4px' }}>0 ₽</span>
        
        {/* Разделитель */}
        <hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '16px 0' }} />

        {/* Блок сбора денег */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'between', fontSize: '12px', color: '#666', marginBottom: '4px' }}>
            <span style={{ flexGrow: 1 }}>Сбор: {collected} из {target} ₽</span>
            <span style={{ fontWeight: 'bold' }}>{percentage}%</span>
          </div>
          
          {/* Индикатор прогресса (Progress Bar) */}
          <div style={{ width: '100%', height: '6px', backgroundColor: '#e0e0e0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${percentage}%`, height: '100%', backgroundColor: '#24a1de', borderRadius: '3px', transition: 'width 0.3s ease' }} />
          </div>
        </div>

      </div>
    </section>
  );
}


export default App;
