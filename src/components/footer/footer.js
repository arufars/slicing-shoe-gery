// Form
export const Form = ({ title, className }) => {
  return (
    <div>
      <h3 className={`mb-4 text-lg font-medium text-red-600 ${className}`}>
        {title || 'Subscribe to our Newsletter'}
      </h3>
      <form className='mt-4'>
        <input
          className='focus:shadow-outline w-full rounded border px-4 py-3 leading-tight text-gray-700 focus:outline-none'
          type='email'
          placeholder='username@email.com'
        />
      </form>
    </div>
  )
}

// Cooyright 2022 ©
export const Copyright = ({ className, ref, year, name }) => {
  // creaete link my github with dotenv
  const github = process.env.REACT_APP_GITHUB

  return (
    <a
      ref={ref}
      href={github}
      target='_blank'
      rel='noopener noreferrer'
      className={className}
    >
      {`© Copyright ${year || '2022'}. Code by ${name || 'Marine'} & `}
      <a
        className='hover:text-red-500 hover:underline'
        href='https://www.figma.com/file/ReJbOWDc0WR1uizrsgfyfQ/project?node-id=0%3A1'
        target='_blank'
        rel='noopener noreferrer'
      >
        Design by Gery Simon
      </a>
    </a>
  )
}
