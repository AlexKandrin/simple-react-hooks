import React from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group'


export const Notes = ({notes, removeNote, showAlert, hideAlert}) => {

  const deleteNote = (id) => {
    removeNote(id)
    showAlert('Заметка была удалена', 'info')
    setTimeout(() => {
      hideAlert()
    }, 1500)

  }
  if (!notes.length) {
    return <p>Вы пока не создали никаких заметок</p>

  }
  return (
    <TransitionGroup component='ul' className='list-group'>
      {
        notes.map(note => (
          <CSSTransition
            key={note.id}
            classNames={'note'}
            timeout={800}
          >
            <li
              className={'list-group-item note'}
            >
              <div>
                <strong>{note.title}</strong>
                <small>{note.date}</small>
              </div>


              <button type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteNote(note.id)}

              >
                &times;</button>
            </li>
          </CSSTransition>

        ))
      }
    </TransitionGroup>

  )
}




