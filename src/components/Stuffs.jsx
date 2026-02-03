import SpotifyCard from "./SpotifyCard";
import KanyeQuote from "./KanyeQuote";
export default function Stuffs() {
    return (
        <section className="relative h-auto w-full md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-xl rounded-tl-xl p-4 -mt-16 overflow-hidden">
            <div className="w-auto h-6 absolute top-0 left-4 px-2 bg-[#252525] rounded-[2px] flex flex-wrap font-semibold items-center text-[10px] sm:text-[10px] md:text-[10px] font-light text-gray-600s">
                <p className="text-[#5F5F5F]">UI</p>
            </div>
            <div className="w-full h-auto border border-[#252525] p-4 mt-6 rounded-[8px]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2 w-full min-h-[135px] sm:min-h-[135px] 
                                px-5 bg-transparent border border-[#252525] rounded-[10px] 
                                flex flex-col gap-2 transition duration-300 ease-in-out hover:bg-[#252525]">
                  <SpotifyCard />
                </div>
                <div className="w-full min-h-[90px] sm:min-h-[135px] 
                                border border-[#252525] rounded-md p-4 flex flex-col gap-3">
                  <KanyeQuote />
                </div>
              </div>
            </div>
        </section>
    )
}