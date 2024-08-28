import './main.css'
import Card from './card/Card'

const MainList = (greeting) => {
  return (
    <>
      <h2 className='main_h2'>{greeting.title}</h2>
      <section className='main_conteiner'>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </>
  )
}

export default MainList