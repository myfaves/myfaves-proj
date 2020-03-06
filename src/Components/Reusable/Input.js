import React from 'react'
import '../../Style/input.css'

export default ({ setValue, value, name, placeHolder, reff = null, charLimit = 60, type = 'text' }) => {
  const [ focus, setFocus ] = React.useState(false)

  return (
    <div className="myfaves-input-container">
      <input
        name={name}
        autoCorrect="off"
        className="myfaves-input"
        type={type}
        value={value}
        onChange={setValue}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        ref={reff}
        maxLength={charLimit}
      />
      <span className={`myfaves-input-underline ${focus || value ? 'ulfocus' : 'ulnofocus'}`}></span>
      <span className={`myfaves-input-placeholder ${focus || value ? 'phfocus' : 'phnofocus'}`}>{placeHolder}</span>
    </div>
  )
}