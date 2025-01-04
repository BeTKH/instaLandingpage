import Image from "next/image";

type CoverImage = {
  id: number;
  title: string;
  image: string;
};

type PhotoStackProps = {
  covers: CoverImage[];
};

export function PhotoStack({ covers }: PhotoStackProps) {
  return (
    <div className="relative h-[400px] md:h-[500px] mb-16">
      <div className="absolute left-1/2  -translate-x-1/2 -translate-y-1">
        {covers.map((cover, index) => (
          <div
            key={cover.id || index}
            className={`absolute top-0 left-0 transform transition-all duration-300 hover:z-10`}
            style={{
              transform: `
                translate(${index * 10 - 20}%, ${index * 5 - 10}%) 
                rotate(${(index - 1) * 10}deg)
              `,
            }}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-48 md:w-64">
              <div className="bg-[#f0f0f0] px-3 py-1.5 flex items-center border-b">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                </div>
                <div className="text-xs text-gray-500 mx-auto pr-8">
                  {cover.title}
                </div>
              </div>
              <div className="relative">
                <Image
                  src={cover.image}
                  width={600}
                  height={600}
                  alt={cover.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
