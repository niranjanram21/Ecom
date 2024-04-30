import {Link} from 'react-router-dom'

const AdminHeader = () => {
  return (
    <>
      <h2 className="mb-2 mx-8 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Hello Admin!</h2>  
      <div className='flex justify-center items-center gap-4'>
        <Link to="/login" className="inline-block rounded-lg bg-red-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-pink-500 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Add product</Link>
        <Link to="/login" className="inline-block rounded-lg bg-red-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-pink-500 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Update product</Link>
        <Link to="/login" className="inline-block rounded-lg bg-red-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-pink-500 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-700 md:text-base">Delete product</Link>
      </div>
    </>
  )
}

export default AdminHeader
