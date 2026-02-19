import './CategorySheet.css'

const categories = [
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
    id: 'flirty',
    label: 'Flirty',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8"/><path d="M7 10h10"/>
        <path d="M12 15v7"/>
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H7c-1.5 4-2 6-2 8a5 5 0 0 0 5 5z"/>
      </svg>
    ),
  },
  {
    id: 'chemistry',
    label: 'Chemistry',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
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
    id: 'complicated',
    label: "It's Complicated",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v12"/><path d="M17.196 9 6.804 15"/><path d="m6.804 9 10.392 6"/>
      </svg>
    ),
  },
]

export default function CategorySheet({ open, onClose, onSelect }) {
  return (
    <>
      <div
        className={`sheet-overlay ${open ? 'sheet-overlay--open' : ''}`}
        onClick={onClose}
      />
      <div className={`category-sheet ${open ? 'category-sheet--open' : ''}`}>
        <div className="category-sheet__header">
          <div className="category-sheet__grabber" />
          <span className="category-sheet__title">Unfold vrienden</span>
        </div>
        <div className="category-sheet__list">
          {categories.map(cat => (
            <button
              key={cat.id}
              className="category-item"
              onClick={() => onSelect(cat)}
            >
              <span className="category-item__icon">{cat.icon}</span>
              <span className="category-item__label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
