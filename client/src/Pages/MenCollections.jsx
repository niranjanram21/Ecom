import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const MenCollections = () => {
  const [data, setData] = useState([''])

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
    .then(res => {console.log(res.data);
          setData(res.data)})
    .catch(err => console.error(err))
  },[])
  
  return (<>
  <div className="flex justify-center gap-2" >
    <Link to="/men-collections" className="inline-block rounded-lg bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white outline-none ring-pink-500 transition duration-100 hover:bg-blue-300 focus-visible:ring active:bg-blue-700 md:text-base">Men&apos;s clothing</Link>
    <Link to="/women-collections" className="inline-block rounded-lg bg-red-500 px-4 py-3 text-center text-sm font-semibold text-white outline-none ring-pink-00 transition duration-100 hover:bg-red-300 focus-visible:ring active:text-red-700 md:text-base">Women&apos;s clothing</Link>
    <Link to="/collections" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-pink-00 transition duration-100 hover:bg-gray-200 focus-visible:ring active:text-black md:text-base">Clear</Link>
    </div>
<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
  {data.map(p => (
    <div key={p.id} className="flex flex-col py-4 px-2 sm:px-4 md:px-6">
      <div className="bg-pink-100 rounded-lg shadow-lg flex-grow flex flex-col justify-between">
        <a href="#" className="group relative block overflow-hidden rounded-t-lg">
          <img
            src={p.image}
            loading="lazy"
            alt="Product Image"
            className="h-54 sm:h-64 w-full object-cover transition duration-200 group-hover:scale-110"
          />

          <div className="absolute left-0 bottom-0 w-full bg-gray-800 bg-opacity-50 text-center py-1">
            <span className="text-white text-xs font-semibold uppercase tracking-wider">Add to Cart</span>
          </div>
        </a>

        <div className="p-4 flex-grow">
          <a href="#" className="text-sm text-gray-800 transition duration-100 hover:text-gray-500 line-clamp-2">{p.title}</a>
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold text-gray-600 text-xs sm:text-sm">${p.price}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


</>)
}

export default MenCollections
