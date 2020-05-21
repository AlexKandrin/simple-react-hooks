import React, {Fragment, useContext, useEffect} from "react";

import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/fireBase/firebaseContext";
import {Loader} from "../components/Loader";
import {AlertContext} from "../context/alert/alertContext";

export const Home = () => {
  const {loading, notes, fetchNotes,removeNote} = useContext(FirebaseContext)
  const {show,hide}=useContext(AlertContext)

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <Fragment>
      <Form/>
      <hr/>

      {loading ? <Loader/>
        : <Notes notes={notes} removeNote={removeNote}
                 showAlert={show} hideAlert={hide}/>}

    </Fragment>
  )
}