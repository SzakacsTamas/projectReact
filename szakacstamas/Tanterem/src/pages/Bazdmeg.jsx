export default function RegSuccess() {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-[#0A0E14] text-white px-4 py-6 sm:px-6 sm:py-8 flex items-center justify-center'>
      {/* háttér glow */}
      <div className='absolute w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] bg-indigo-500/15 blur-3xl rounded-full top-[-140px] left-[-140px] sm:top-[-200px] sm:left-[-200px]' />
      <div className='absolute w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] bg-cyan-500/10 blur-3xl rounded-full bottom-[-140px] right-[-140px] sm:bottom-[-200px] sm:right-[-200px]' />

      {/* card */}
      <div className='relative w-full max-w-lg rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl text-center p-6 sm:p-8'>
        <div className='text-green-400 text-4xl sm:text-5xl mb-4'>✓</div>

        <h1 className='text-xl sm:text-2xl font-semibold'>
          Sikeresen regisztráltál!
        </h1>

        <p className='text-white/60 text-sm sm:text-base mt-3 leading-relaxed'>
          Erősítsd meg a fiókod az email-ben kapott link segítségével.
        </p>

        <div className='w-full h-px bg-white/10 my-6' />

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <a
            href='/login'
            className='w-full sm:w-auto px-5 py-3 rounded-lg border border-white/10 hover:bg-white/10 transition'
          >
            Vissza a bejelentkezéshez
          </a>

          <a
            href='https://mail.google.com/'
            target='_blank'
            rel='noreferrer'
            className='w-full sm:w-auto px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-medium hover:opacity-90 transition'
          >
            Email megnyitása
          </a>
        </div>
      </div>
    </div>
  );
}