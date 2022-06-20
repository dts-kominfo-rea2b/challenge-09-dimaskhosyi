import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'
// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className='Container'>
        <Header className='Header'/>
        <Contact name={contacts[0]} />
        <Contact name={contacts[1]} />
        <Contact name={contacts[2]} />
        <Contact name={contacts[3]} />
        <Contact name={contacts[4]} />
        <Contact name={contacts[5]} />
      </div>
    </div>
  );
}

export default App;
