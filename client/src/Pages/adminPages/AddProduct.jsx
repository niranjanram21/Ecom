
const AddProduct = () => {
  return (
    <div className=" py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">

    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">

      <div className="sm:col-span-2">
        <label htmlFor="company" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Image URL</label>
        <input name="company" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Title</label>
        <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Price</label>
        <input name="subject" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <button className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

        <span className="text-sm text-gray-500">*Required</span>
      </div>

      <p className="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
    </form>

  </div>
</div>
  )
}

export default AddProduct
