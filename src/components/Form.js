import React, {useState, useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/fireBase/firebaseContext";

export const Form = () => {
	const [value, setValue] = useState('')
	const alert = useContext(AlertContext)
	const {addNote} = useContext(FirebaseContext)

	const submitHandler = (e) => {
		e.preventDefault()

		if (value.trim()) {
			addNote(value.trim()).then(() =>
				alert.show('Заметка была создана', 'success')).catch(() => alert.show('Что-то пошло не так', 'danger'))
			setValue('')

		} else {
			alert.show('Введите название заметки', 'warning')
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="from-group d-flex align-items-center">
				<input type="text"
							 className="form-control"
							 placeholder={'Введите название заметки'}
							 value={value}
							 onChange={(e) => setValue(e.target.value)}
				/>
				<button type={'submit'}
								className='btn btn-sm btn-warning ml-1'
				>Добавить заметку
				</button>
			</div>
		</form>
)
}