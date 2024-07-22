import React, {useState} from 'react'
import Header from './Header/index'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('+998');
  const [deck, setDeck] = useState('');
  const [nat, setNat] = useState('uzbek');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState();
  const [num, setNum] = useState()


  function handleCompany(event){
    setName(event.target.value)
  }
  function handleEmail(event){
    setEmail(event.target.value)
  }
  function handlePhone(event){
    setNumber(event.target.value)
    if (!number.startsWith('+998')) {
      setError('Telefon raqami +998 bilan boshlanishi kerak');
      return;
    }
  }
  function handleNationality(event){
    setNat(event.target.value)
  }
  function handleCity(event){
    setCity(event.target.value)
  }
  function handleLocation(event){
    setLocation(event.target.value)
  }
  function handleNumber(event){
    setNum(event.target.value)
  }
  function handleForm(event){
    event.preventDefault()
    let user = {
      name,
      email,
      number,
      deck,
      nat,
      city,
      location,
      num
    }
    localStorage.setItem('user', JSON.stringify(user));
    alert('Malumot saqlandi!');
    setName('')
    setEmail('')
    setNumber('')
    setDeck('')
    setNat('')
    setCity('')
    setLocation('')
    setNum('')
  }
  return (
    <>
      <Header></Header>
      <div className='form'>
        <h3>Kompaniya ma'lumtlari</h3>
        <p>Kompaniya haqidagi ma'lumotlarni kiriting</p>
        <div className="form-group">
          <label htmlFor="upload" className="upload-label">
            Yuklash
          </label>
          <input type="file" id="upload" className="upload-input" />
        </div>
        <form id='form'>
          <label htmlFor="">Kompaniya nomi</label><br />
          <input type="text" placeholder='Kompaniya name'onChange={handleCompany}/>
          <label htmlFor="">Email</label><br />
          <input type="email" placeholder='Email' onChange={handleEmail}/>
          <label htmlFor="">Telefon raqami</label><br />
          <input type="number" placeholder='UZ +9989' onChange={handlePhone}/>
          <div className="links">
            <label htmlFor="">Linklar*</label><br />
            <i class="fa-solid fa-earth-asia"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-github"></i>
          </div>
          <div id="location">
            <label htmlFor="">Davlat</label><br />
            <select name="location" id="location" onChange={handleNationality}>
              <option value="davlat">Davlat</option>
              <option value="uzb">Uzbekistan</option>
              <option value="rus">Russina</option>
              <option value="usa">Usa</option>
              <option value="japan">Japan</option>
              <option value="korea">Kore</option>
            </select>
            <label htmlFor="">Shahar</label> <br />
            <select name="city" id="city" onChange={handleCity}>
              <option value="shahar">Shahar</option>
              <option value="shahar">Shahar</option>
              <option value="shahar">Shahar</option>
              <option value="shahar">Shahar</option>
              <option value="shahar">Shahar</option>
            </select>
          </div>
          <label htmlFor="">Yashash joyi</label><br />
          <input type="name" placeholder='Joy' onChange={handleLocation}/>

          <label htmlFor="">Hodimlar soni</label><br />
          <input type="number" placeholder='Hodimlar soni' onChange={handleNumber}/> <br />

          <textarea name="desc" id="desc" placeholder='Kompaniya haqida izoh qoldiring' onChange={(event) => {setDeck(event.target.value)}}></textarea>
        </form>
        <div className="buttons">
          <button className='previus'>Ortga</button>
          <button className='next' onClick={handleForm}>Keyingisi</button>
        </div>
      </div>
    </>
  )
}

export default App
