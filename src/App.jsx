import { useState, useRef } from 'react'
import Card from './components/Card'
import CategorySheet from './components/CategorySheet'
import { questions } from './questions'
import './App.css'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ALL_QUESTIONS = shuffle(questions)

export default function App() {
  const [deck, setDeck] = useState(ALL_QUESTIONS)
  const [gone, setGone] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const barTouchStartY = useRef(0)

  function handleSwipe() {
    setGone(g => g + 1)
  }

  function handleRestart() {
    setDeck(shuffle(activeCategory
      ? questions.filter(q => q.category === activeCategory.id)
      : questions
    ))
    setGone(0)
  }

  function onBarTouchStart(e) {
    barTouchStartY.current = e.touches[0].clientY
  }

  function onBarTouchEnd(e) {
    const deltaY = e.changedTouches[0].clientY - barTouchStartY.current
    if (deltaY < -40) setSheetOpen(true)
  }

  function handleSelectCategory(cat) {
    const filtered = shuffle(questions.filter(q => q.category === cat.id))
    setDeck(filtered)
    setGone(0)
    setActiveCategory(cat)
    setSheetOpen(false)
  }

  const remaining = deck.slice(gone)
  const visible = remaining.slice(0, 3)

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-inner">
          <div className="app__header-spacer" />
          <h1 className="app__title">Unfold</h1>
          <button
            className="app__settings-btn"
            onClick={() => setSheetOpen(true)}
            aria-label="Kies een categorie"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 7h-9"/>
              <path d="M14 17H5"/>
              <circle cx="17" cy="17" r="3"/>
              <circle cx="7" cy="7" r="3"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="app__stage">
        {remaining.length === 0 ? (
          <div className="app__empty">
            <span className="app__empty-icon">✨</span>
            <p>Alle vragen zijn geweest!</p>
            <button className="app__restart" onClick={handleRestart}>
              Opnieuw shuffelen
            </button>
          </div>
        ) : (
          <div className="app__card-center">
            {visible.map((question, i) => (
              <Card
                key={question.id}
                question={question.text}
                type={question.type}
                onSwipe={handleSwipe}
                isTop={i === 0}
                stackIndex={i}
              />
            ))}
          </div>
        )}
      </div>

      <button
        className="app__bottom-bar"
        onClick={() => setSheetOpen(true)}
        onTouchStart={onBarTouchStart}
        onTouchEnd={onBarTouchEnd}
        aria-label="Kies een categorie"
        aria-expanded={sheetOpen}
      >
        <div className="app__grabber" />
        <span className="app__bar-title">
          {activeCategory ? `Unfold ${activeCategory.label}` : 'Kies een categorie'}
        </span>
      </button>

      <CategorySheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSelect={handleSelectCategory}
        activeId={activeCategory?.id}
        activeCategory={activeCategory}
      />
    </div>
  )
}
