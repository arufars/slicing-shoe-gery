import { Logo, navFooter, NavLink } from "../navbar/navItems"
import { Copyright, Form } from "./footer"

const Footer = () => {
  return (
    <div className='border-t-2'>
      <div className='mx-auto max-w-screen-xl justify-between py-10  text-gray-800 sm:flex '>
        <div className='p-5'>
          <Logo className='mb-4 text-3xl' />
          <ul className='flex text-sm uppercase text-gray-500'>
            {navFooter.map(item => (
              <NavLink
                key={item.id}
                {...item}
                className='mr-2 hover:text-red-600'
              />
            ))}
          </ul>
        </div>
        <div className='p-5'>
          <Form />
          <a
            href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj0jeXWg8v3AhWh6XMBHe1ZABQQFnoECBAQAQ&url=https%3A%2F%2Funsplash.com%2F&usg=AOvVaw07uHYdeyZQMneg6p8JTUC3'
            target='_blank'
            rel='noopener noreferrer'
            className='my-5 text-xs text-gray-500 hover:text-black hover:underline'>
            Image by unplash
          </a>
        </div>
      </div>
      <div className='m-auto flex max-w-screen-xl  items-center justify-center gap-x-4 py-5 text-sm text-gray-800/80 '>
        <Copyright />
      </div>
    </div>
  )
}

export default Footer
