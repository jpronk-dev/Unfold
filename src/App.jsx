import { useState, useRef } from 'react'
import Card from './components/Card'
import CategorySheet, { categories } from './components/CategorySheet'
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

function getInitialCategory() {
  const saved = localStorage.getItem('unfold_category')
  return categories.find(c => c.id === saved) ?? categories[0]
}

function getInitialDeck(cat) {
  return shuffle(questions.filter(q => q.category === cat.id))
}

const initialCategory = getInitialCategory()

export default function App() {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [deck, setDeck] = useState(() => getInitialDeck(initialCategory))
  const [gone, setGone] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(false)
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
    localStorage.setItem('unfold_category', cat.id)
  }

  const remaining = deck.slice(gone)
  const visible = remaining.slice(0, 3)

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-inner">
          <div className="app__header-spacer" />
          <h1 className="app__title">Unfold</h1>
          <div className="app__header-spacer" />
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
