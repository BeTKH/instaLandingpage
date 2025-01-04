import Image from "next/image";

type CoverImageProps = {
  title: string;
  image: string;
  angle: number;
};

export function CoverImages({ title, image, angle }: CoverImageProps) {
  return (
    <section className="mb-12 relative" aria-label="Photo frame">
      <div className="relative h-[400px] max-w-[320px] mx-auto">
        <div
          className="absolute left-1/2 top-1/2 transform duration-300"
          style={{
            transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          }}
        >
          <div className="bg-[#FFF5E1] rounded-lg shadow-lg overflow-hidden w-[200px] border-4 border-[#FFD700] relative">
            {/* Header */}
            <div className="bg-[#FFD700] px-2 py-1 flex items-center justify-between">
              <div className="text-xs font-bold text-black">KODAK</div>
              <div className="text-xs text-black truncate">{title}</div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src={image}
                width={240}
                height={240}
                alt={title}
                className="w-full h-auto"
              />
              {/* Film Strip Decor */}
              <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#FFD700] flex flex-col justify-between py-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-2 bg-[#FFF5E1] rounded-sm mx-auto"
                  ></div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#FFD700] px-2 py-1 flex items-center justify-between">
              <div className="text-xs text-black">ISO 400</div>
              <div className="text-xs text-black">36 EXP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
