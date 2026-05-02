import WaveBackground from "./WaveBackground";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative top-20 flex flex-col h-60 w-full  items-center justify-center font-sans overflow-hidden border-b border-gray-200/40"
        >
            <WaveBackground />

            <Image
                src="/images/icon.webp"
                alt="Background Icon"
                width={180}
                height={180}
                className="absolute inset-0 m-auto opacity-40 z-10 pointer-events-none"
            />
        </section>
    );
}