export default function SearchBar () {
  return (
    <form className='flex items-center mb-6' action=''>
      <input className='h-[5rem] w-[64rem] rounded-xl px-4 shadow-sm text-xl' placeholder='Search your Pokemon!' type='text' />
      <button className='relative right-[4rem] px-2 py-[0.4rem] icon-pokeball text-3xl rounded-lg shadow-sm bg-[#ff5350] text-white shadow-[#ff5350]' type='submit' />
    </form>
  )
}
