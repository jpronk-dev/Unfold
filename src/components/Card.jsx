import { useRef, useState } from 'react'
import './Card.css'

const SWIPE_THRESHOLD = 80

export default function Card({ question, onSwipe, isTop, stackIndex }) {
  const [drag, setDrag] = useState({ x: 0, y: 0, dragging: false })
  const [exiting, setExiting] = useState(null)
  const startPos = useRef({ x: 0, y: 0 })

  function getPointerPos(e) {
    if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY }
    return { x: e.clientX, y: e.clientY }
  }

  function onDragStart(e) {
    if (!isTop || exiting) return
    e.preventDefault()
    const pos = getPointerPos(e)
    startPos.current = pos
    setDrag({ x: 0, y: 0, dragging: true })
  }

  function onDragMove(e) {
    if (!drag.dragging) return
    e.preventDefault()
    const pos = getPointerPos(e)
    setDrag(d => ({
      ...d,
      x: pos.x - startPos.current.x,
      y: pos.y - startPos.current.y,
    }))
  }

  function onDragEnd() {
    if (!drag.dragging) return
    const { x, y } = drag
    const absX = Math.abs(x)
    const absY = Math.abs(y)

    if (absX > SWIPE_THRESHOLD || absY > SWIPE_THRESHOLD) {
      let direction
      if (absX > absY) {
        direction = x > 0 ? 'right' : 'left'
      } else {
        direction = y > 0 ? 'down' : 'up'
      }
      setExiting(direction)
      setDrag({ x: 0, y: 0, dragging: false })
      setTimeout(() => onSwipe(direction), 350)
    } else {
      setDrag({ x: 0, y: 0, dragging: false })
    }
  }

  // Cards are centered via CSS (inset: 0; margin: auto)
  // Transforms are applied on top of that centered position
  const stackRotations = [0, 3.74, 7.74]
  const baseRotation = stackRotations[stackIndex] || 0
  const dragRotation = drag.x / 18

  let transform
  let transition = 'transform 0.3s ease'
  let opacity = 1

  if (isTop && !exiting) {
    transform = `translate(${drag.x}px, ${drag.y}px) rotate(${dragRotation}deg)`
    transition = drag.dragging
      ? 'none'
      : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  } else if (!isTop) {
    transform = `rotate(${baseRotation}deg)`
  } else {
    transform = `translate(0px, 0px) rotate(0deg)`
  }

  if (exiting === 'left')  transform = `translate(-150vw, ${drag.y}px) rotate(-30deg)`
  if (exiting === 'right') transform = `translate(150vw,  ${drag.y}px) rotate(30deg)`
  if (exiting === 'up')    transform = `translate(${drag.x}px, -150vh) rotate(${dragRotation}deg)`
  if (exiting === 'down')  transform = `translate(${drag.x}px,  150vh) rotate(${dragRotation}deg)`

  if (exiting) {
    transition = 'transform 0.35s ease-in, opacity 0.35s ease-in'
    opacity = 0
  }

  return (
    <div
      className={`card ${isTop ? 'card--top' : ''}`}
      style={{ transform, transition, opacity, zIndex: 10 - stackIndex }}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
    >
      <p className="card__question">{question}</p>
    </div>
  )
}
