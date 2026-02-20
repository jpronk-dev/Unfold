import { useRef } from 'react'
import './CategorySheet.css'

export const categories = [
  {
    id: 'first-date',
    label: 'First Date',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>
        <path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/>
      </svg>
    ),
  },
  {
    id: 'vrienden',
    label: 'Vrienden',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 11h.01"/><path d="M14 6h.01"/>
        <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"/>
        <path d="M16 2c0 4.42-1.4 9.31-4 14"/>
        <path d="m5 18 4-2"/><path d="m12 16 4 2"/>
        <path d="m14 21 5-4"/><path d="m5 21-1-4"/>
      </svg>
    ),
  },
  {
    id: 'deep',
    label: 'Deep',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    ),
  },
  {
    id: 'flirty',
    label: 'Flirty',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/>
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H7c-1.5 4-2 6-2 8a5 5 0 0 0 5 5z"/>
      </svg>
    ),
  },
]

export default function CategorySheet({ open, onClose, onSelect, activeId, activeCategory }) {
  const touchStartY = useRef(0)

  function onTouchStart(e) {
    touchStartY.current = e.touches[0].clientY
  }

  function onTouchEnd(e) {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current
    if (deltaY > 50) onClose()
  }

  const sheetTitle = activeCategory
    ? `Unfold ${activeCategory.label}`
    : 'Kies een categorie'

  return (
    <>
      <div
        className={`sheet-overlay ${open ? 'sheet-overlay--open' : ''}`}
        onClick={onClose}
      />
      <div
        className={`category-sheet ${open ? 'category-sheet--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Kies een categorie"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="category-sheet__header">
          <div className="category-sheet__grabber" />
          <span className="category-sheet__title">{sheetTitle}</span>
        </div>

        <div className="category-sheet__list">
          {categories.map(cat => {
            const isActive = activeId === cat.id
            return (
              <button
                key={cat.id}
                className={`category-item ${isActive ? 'category-item--active' : ''}`}
                onClick={() => onSelect(cat)}
                aria-pressed={isActive}
              >
                <span className={`category-item__icon${isActive ? ' category-item__icon--active' : ''}`}>
                  {cat.icon}
                </span>
                <span className="category-item__label">{cat.label}</span>
                {isActive && (
                  <svg className="category-item__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                )}
              </button>
            )
          })}
        </div>

        <div className="category-sheet__home-indicator" />
      </div>
    </>
  )
}
