import { useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import Form from './components/Form';
import Header from './components/Header';
import { useDispatch } from 'react-redux'
import { getCountries, getCovidDetail } from './redux/covidSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [])
  return (
    <>
      <Header />
      <Cards />
      <Form />
    </>
  );
}

export default App;
