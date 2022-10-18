import { Footer, Navbar } from '../components'

const Container = ({ children }) => {
  return (
    <div className='container mx-auto px-10 py-9 font-raleway max-w-full md:w-full md:max-w-6xl xl:max-w-7xl 2xl:px-0'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Container
