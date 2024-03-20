import React from 'react'
import { FaExclamationTriangle} from 'react-icons/fa'


const PageNotFound = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center'>
        <FaExclamationTriangle className='text-mb-4 m-5' style={{color: "yellow", fontSize: "100px"}}/>
    <div><img src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif" /></div>
        <h1 className="mb-4">404 Not Found</h1>

    </section>
  )
}

export default PageNotFound;
