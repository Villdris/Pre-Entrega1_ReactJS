import './header.css'

export const Header = (titulo) => {
  return (
    <header className='header'>
        <h1 className='header_h1'>{titulo.title}</h1>
        <p className='header_p'>{titulo.subtitle}</p>
    </header>

  )
}

export default Header
