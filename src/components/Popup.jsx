export function Popup(props) {
  const { visible, title, description } = props

  return (
    <div class="popup" style={{ display: visible ? 'flex' : 'none' }}>
      <div class="popup__dot" />
      <div class="popup__content">
        <span class="content__title">{title}</span>
        <p class="content__description">{description}</p>
      </div>
    </div>
  )
}
