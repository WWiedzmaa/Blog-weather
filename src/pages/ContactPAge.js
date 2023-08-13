
import React, { useState } from 'react'
import MainTemplate from '../templates/MainTemplate'
import styles from './ContactPage.module.css'
import { Checkbox, FormControlLabel, TextField } from '@mui/material';

const ContactPAge = () => {
  const [contact, setContact] = useState({
    email: "",
    name: "",
    lastName: "",
    reason: "",
    text: "",

  });

  const [thanks, setThanks] = useState(false);

  const [checkbox, setCheckbox] = useState(false)


  const submit = (e) => {
    e.preventDefault()

    if (Object.values(contact).every((object) => object !== "") && checkbox) {
      setContact({
        email: "",
        name: "",
        lastName: "",
        reason: "",
        text: "",
      })
      setThanks(true)
    } else {
      alert("Nie uzupełniłeś wszystkich pól lub nie wyraziłeś zgody na przetwarzanie danych")
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    })
    if (thanks) setThanks(false);
  }

  return (
    <MainTemplate>
      <div>
        <div className={styles.main}><strong>Kontakt</strong></div>
        <form onSubmit={submit} className={styles.form}>
 
          <TextField  label={'email'} onChange={handleChange} value={contact.email} name='email' type='email'
          InputProps={{ className: styles.inputText}} InputLabelProps={{ style: { color: '#b9aaaa' },}}/>
          <TextField  label={'imię'} onChange={handleChange} value={contact.name} name='name' type='text' 
          InputProps={{ className: styles.inputText}} InputLabelProps={{ style: { color: '#b9aaaa' }}}/>
          <TextField  label={'nazwisko'} onChange={handleChange} value={contact.lastName} name='lastName' type='text' 
          InputProps={{ className: styles.inputText}} InputLabelProps={{ style: { color: '#b9aaaa' }}}/>
          <TextField label={'temat'} onChange={handleChange} value={contact.reason} name='reason' type='text' 
          InputProps={{ className: styles.inputText}} InputLabelProps={{ style: { color: '#b9aaaa' }}}/>
          <TextField  label={'wiadomosć'} onChange={handleChange} value={contact.text} name='text' type='text' multiline rows={3}
          InputProps={{ className: styles.inputText}} InputLabelProps={{ style: { color: '#b9aaaa' }}}/>
          <FormControlLabel required control={<Checkbox />} className={styles.FormControlLabel} label={<span className={styles.checkbox}>Zgoda na przetwarzanie danych osobowych</span>} />
          <button className={styles.bnt}> wyślij</button>

        </form>
        {thanks && <div > Dziękujemy za kontakt </div>}
      </div>
    </MainTemplate>
  )
}

export default ContactPAge