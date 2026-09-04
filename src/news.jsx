// news.jsx

function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Общее собрание",
      date: "15 июня 2026",
      text: "Состоится общее собрание членов СНТ. Повестка будет опубликована заранее."
    },
    {
      id: 2,
      title: "Отключение электроэнергии",
      date: "10 июня 2026",
      text: "Плановые работы на линии. Возможны временные отключения электроэнергии."
    },
    {
      id: 3,
      title: "Вывоз мусора",
      date: "5 июня 2026",
      text: "Просьба не оставлять мусор рядом с контейнерной площадкой."
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Новости</h2>

      <div className="news-grid">
        {news.map((item) => (
          <article className="card news-card" key={item.id}>
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// Экспортируем компонент, чтобы его можно было использовать в других файлах
export default NewsSection;