export function Input() {
    return (
        <label className='w-72 h-10 cursor-pointer'>
          <span className='transition ease-in-out duration-150 absolute text-xl top-1 left-1 group-focus-within:-top-6 group-focus-within:left-0 group-focus-within:text-sm'>Contraseña</span>
          <input type="text" placeholder="Input" className='bg-night-blue-500 w-full h-full' />
        </label>
      );
}
