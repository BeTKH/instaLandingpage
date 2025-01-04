import { Header } from "@/components/Header";
import { PhotoStack } from "@/components/PhotoStack";
import { CoverImages } from "@/components/CoverImages";
// import { FreeStuff } from "@/components/FreeStuff";
// import { Button } from "@/components/button";
// import Link from "next/link";

const coverImages = [
  {
    id: 1,
    title: "Summer in Paris",
    image: "/placeholder.svg?height=360&width=240&text=Summer",
    angle: 15,
  },
  {
    id: 2,
    title: "Summer in Berlin",
    image: "/placeholder.svg?height=360&width=240&text=Summer",
    angle: -25,
  },
];

export default function BioSite() {
  return (
    <main className="min-h-screen bg-[#fdf4ea] px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        {coverImages.map(({ id, title, image, angle }) => (
          <div key={id} className="space-y-4">
            <PhotoStack covers={[{ id, title, image }]} />
            <CoverImages title={title} image={image} angle={angle} />
          </div>
        ))}
      </div>
    </main>
  );
}
