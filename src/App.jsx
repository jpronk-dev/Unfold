import { useState } from 'react'
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

export default function App() {
  const [deck, setDeck] = useState(() => shuffle(questions))
  const [gone, setGone] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Unfold Deep')

  function handleSwipe() {
    setGone(g => g + 1)
  }

  function handleRestart() {
    setDeck(shuffle(questions))
    setGone(0)
  }

  function handleSelectCategory(cat) {
    setActiveCategory(cat.label)
    setSheetOpen(false)
  }

  const remaining = deck.slice(gone)
  const visible = remaining.slice(0, 3)

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Unfold</h1>
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
          visible.map((question, i) => (
            <Card
              key={deck.indexOf(question)}
              question={question}
              onSwipe={handleSwipe}
              isTop={i === 0}
              stackIndex={i}
            />
          ))
        )}
      </div>

      <button className="app__bottom-bar" onClick={() => setSheetOpen(true)}>
        <div className="app__grabber" />
        <span className="app__bar-title">{activeCategory}</span>
      </button>

      <CategorySheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onSelect={handleSelectCategory}
      />
    </div>
  )
}
