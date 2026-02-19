import './CategorySheet.css'

export const categories = [
  {
    id: 'first-date',
    label: 'First Date',
    description: 'Luchtig, nieuwsgierig, geen druk.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>
        <path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/>
      </svg>
    ),
  },
  {
    id: 'flirty',
    label: 'Flirty',
    description: 'Opbouwend van licht ondeugend naar écht spicy.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 22h8"/><path d="M7 10h10"/>
        <path d="M12 15v7"/>
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H7c-1.5 4-2 6-2 8a5 5 0 0 0 5 5z"/>
      </svg>
    ),
  },
  {
    id: 'deep',
    label: 'Deep',
    description: 'Voor de moedigen. Vragen die je alleen stelt als je écht wil begrijpen wie iemand is.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    ),
  },
  {
    id: 'vrienden',
    label: 'Vrienden',
    description: 'Elkaar opnieuw ontdekken.',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

export default function CategorySheet({ open, onClose, onSelect, activeId }) {
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
      >
        <div className="category-sheet__header">
          <div className="category-sheet__grabber" />
          <span className="category-sheet__title">Kies een categorie</span>
        </div>
        <div className="category-sheet__list">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-item ${activeId === cat.id ? 'category-item--active' : ''}`}
              onClick={() => onSelect(cat)}
              aria-label={cat.label}
              aria-pressed={activeId === cat.id}
            >
              <span className="category-item__icon">{cat.icon}</span>
              <div className="category-item__text">
                <span className="category-item__label">{cat.label}</span>
                <span className="category-item__desc">{cat.description}</span>
              </div>
              {activeId === cat.id && <span className="category-item__check">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
