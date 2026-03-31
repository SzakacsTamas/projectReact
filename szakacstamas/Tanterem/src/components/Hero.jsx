import { useState } from "react";

export default function Hero() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="pt-32 text-center px-5 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-indigo-400/10 p-6 sm:p-8 rounded-xl border-2 border-indigo-300/70">
        <h1 className="text-3xl font-bold text-white">Digitális Tanterem</h1>
        <p className="mt-3 text-white/70">
          Modern oktatási platform
        </p>
        <hr className="my-4 border-white/20" />

       <button
  onClick={() => setShowMore(!showMore)}
  className="
  mt-2
  px-5 py-2
  text-sm sm:text-base
  rounded-xl
  border-2 border-teal-500/80
  bg-slate-400/10
  text-white font-semibold
  shadow-md shadow-teal-500/40
  hover:scale-105
  hover:border-pink-500/80
  hover:shadow-pink-500/60
  transition-all
  hover:cursor-pointer
  "
>
  {showMore ? "Bezárás" : "Tudj meg többet!"}
</button>

        {/* Lenyíló rész */}
        <div
          className={`mt-6 text-left transition-all duration-500 overflow-hidden ${
            showMore ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-white/5 rounded-lg">
              <h3 className="text-center text-lg font-semibold">Kik és miért?</h3>
              <hr className="my-2 border-white/20" />
              <p className="text-white/60 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deleniti aspernatur
                autem ipsum sapiente laboriosam. Quisquam commodi ratione fugit. Adipisci, ipsa
                unde. Cupiditate quod placeat qui velit eius quibusdam magni?
              </p>
            </div>

            <div className="p-3 bg-white/5 rounded-lg">
              <h3 className="text-center text-lg font-semibold">Mire képes?</h3>
              <hr className="my-2 border-white/20" />
              <p className="text-white/60 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quia fugiat culpa
                perspiciatis repudiandae, officia eum libero vitae quam, repellat ullam. Minima quis
                corrupti commodi asperiores molestias voluptates magnam. Sunt.
              </p>
            </div>

            <div className="p-3 bg-white/5 rounded-lg">
              <h3 className="text-center text-lg font-semibold">Mi várható?</h3>
              <hr className="my-2 border-white/20" />
              <p className="text-white/60 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloremque culpa
                quasi eum ratione laborum rem dolore minus tempora quod! Sapiente a tempora
                explicabo, alias voluptatibus non. Aliquam, minus numquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}