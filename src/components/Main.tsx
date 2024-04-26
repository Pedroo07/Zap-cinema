
export const Main = () => {
  return (
    <div>
        <main className='flex justify-around mt-8'>
        <section className='flex flex-col justify-center gap-2'>
          <img src="/Oppenheimer.png" alt="Logo do Oppenheimer" className='max-w-2xl pb-16' />
          <h1 className='text-3xl'>OPPENHEIMER (2023)</h1>
          <h6 className='text-zinc-500 my-2'>IMDb Rating</h6>
          <img src="/Rating.png" alt="rating" width={250} />
          <ul className='flex gap-2 p-2'>
            <li className='border-2 rounded-3xl p-2'>História</li>
            <li className='border-2 rounded-3xl p-2'>Drama</li>
            <li className='border-2 rounded-3xl p-2'>Biografia</li>
          </ul>
          <p className='text-zinc-600 text-lg'>O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan,<br /> levando ao desenvolvimento da bomba atômica.</p>
          <button className='flex w-44 h-12 items-center justify-center gap-2 bg-zinc-50 text-zinc-900 text-xl font-bold my-4 rounded-md shadow-md shadow-zinc-50/70'><CirclePlay /> VER TRAILER</button>
        </section>
        <section className='flex items-end justify-center '>
          <img src="/kung-fu-banner.png" alt="kung-fu-banner" className='w-1/4 opacity-60' />
          <img src="/oppenheimer-banner.png" alt="oppenheimer-banner" className='w-1/3' />
          <img src="/madame-banner.png" alt="madame-banner" className='w-1/4 opacity-60' />
        </section>
      </main>
    </div>
  )
}
