import Bazdmeg from './Bazdmeg.jsx';
import { useState } from 'react';

export default function StripeOnboarding() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const next = () => setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const reg = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await api.post('/register', {
        name,
        password,
        email,
        role,
      });

      console.log('Siker:', res.data);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Sikertelen regisztráció. Kérlek próbáld újra.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <Bazdmeg />;
  }

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-[#0A0E14] text-white px-4 py-6 sm:px-6 sm:py-8 flex items-center justify-center'>
      <div className='absolute w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] bg-indigo-500/15 blur-3xl rounded-full top-[-140px] left-[-140px] sm:top-[-200px] sm:left-[-200px]' />
      <div className='absolute w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] bg-cyan-500/10 blur-3xl rounded-full bottom-[-140px] right-[-140px] sm:bottom-[-200px] sm:right-[-200px]' />

      <div className='relative w-full max-w-3xl rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl p-5 sm:p-6 md:p-8'>
        <h1 className='text-xl sm:text-2xl font-semibold text-center'>
          Fiók létrehozása
        </h1>

        <p className='text-center text-white/50 text-xs sm:text-sm mt-1'>
          {step}. lépés a 3-ból
        </p>

        <div className='w-full h-1 bg-white/10 rounded mt-4 sm:mt-5 overflow-hidden'>
          <div
            className='h-full bg-gradient-to-r from-indigo-500   to-cyan-400 transition-all duration-500'
           style={{
  width: `${
    role
      ? ((step - 1 + 1) / 3) * 100
      : 0
  }%`
}}
          />
        </div>

        {step === 1 && (
          <div className='mt-6 sm:mt-8 space-y-4'>
            <h2 className='text-base sm:text-lg text-center font-medium'>
              Válaszd ki a szereped
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-6'>
              <button
                onClick={() => setRole(2)}
               className={`p-4 sm:p-5 rounded-xl border text-center transition-all duration-300 
hover:scale-[1.03] hover:shadow-xl hover:cursor-pointer hover:border-indigo-600/70 hover:bg-indigo-400/20 

${
  role === 2
    ? 'bg-indigo-500/20 border-indigo-400/50 shadow-lg scale-[1.03]'
    : 'bg-white/5 border-white/10'

    }`}
              >
                <div className='text-2xl mb-2'>👨‍🏫</div>
                <div className='font-medium'>Tanár</div>
                <div className='text-xs text-white/50 mt-1'>
                  Oktatás és osztályok kezelése
                </div>
              </button>

              <button
                onClick={() => setRole(1)}
              className={`p-4 sm:p-5 rounded-xl border text-center transition-all duration-300 
hover:scale-[1.03] hover:shadow-xl hover:cursor-pointer hover:border-sky-600/70 hover:bg-sky-400/20 

${
  role === 1
    ? 'bg-cyan-500/20 border-cyan-400/50 shadow-lg scale-[1.03]'
    : 'bg-white/5 border-white/10'

    }`}
              >
                <div className='text-2xl mb-2'>🎓</div>
                <div className='font-medium'>Diák</div>
                <div className='text-xs text-white/50 mt-1'>
                  Tanulás és kurzusok
                </div>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className='mt-6 sm:mt-8 space-y-3'>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-400 outline-none transition text-sm sm:text-base'
              placeholder='Teljes név'
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-400 outline-none transition text-sm sm:text-base'
              placeholder='Email cím'
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-fuchsia-400 outline-none transition text-sm sm:text-base'
              placeholder='Jelszó'
            />
          </div>
        )}

        {step === 3 && (
          <div className='mt-6 sm:mt-8 text-center'>
            <div className='text-green-400 text-xl mb-2'>✓ Kész</div>

            <p className='text-white/60 text-sm'>
              Szerep:{' '}
              <span className='text-white font-medium'>
                {role === 2 ? 'Tanár' : 'Diák'}
              </span>
            </p>

            <p className='text-white/40 text-sm mt-2 break-words'>
              Név: <span className='text-white/70'>{name}</span>
            </p>

            <p className='text-white/40 text-sm mt-1 break-all'>
              Email: <span className='text-white/70'>{email}</span>
            </p>

            {error && <p className='text-red-400 text-sm mt-4'>{error}</p>}
          </div>
        )}

        <div className='flex flex-col-reverse sm:flex-row justify-between gap-3 mt-8 sm:mt-10'>
          <button
            onClick={back}
            disabled={step === 1 || loading}
            className='w-full sm:w-auto px-4 py-3 rounded-lg border border-white/10 hover:bg-white/10 hover:cursor-pointer  transition disabled:opacity-40 disabled:pointer-events-none' 
          >
            Vissza
          </button>

          {step < 3 ? (
            <button
              onClick={next}
              disabled={
                (step === 1 && !role) ||
                (step === 2 && (!name || !email || !password))
              }
              className='w-full sm:w-auto px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-medium opacity-80 hover:opacity-100 hover:cursor-pointer transition disabled:opacity-30  disabled:pointer-events-none'
            >
              Tovább
            </button>
          ) : (
            <button
              className='w-full sm:w-auto px-4 py-3 rounded-lg bg-green-500 text-black font-medium hover:opacity-90 transition disabled:opacity-40'
              onClick={reg}
              disabled={loading}
            >
              {loading ? 'Feldolgozás...' : 'Befejezés'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}