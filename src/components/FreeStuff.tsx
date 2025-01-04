import Link from "next/link";

export function FreeStuff() {
  return (
    <section className="mb-16 max-w-xl mx-auto">
      <h2 className="text-center text-sm  tracking-widest mb-8 text-gray-600 border-b border-black">
        FREE STUFF &lt;3
      </h2>
      <div className="space-y-6">
        <Link href="#" className="block group">
          <div className="text-center text-sm lower tracking-widest mb-8 text-gray-600 py-4 border-b ">
            <span>notion template 💛</span>
            <span className="transform transition-transform group-hover:translate-x-2">
              →
            </span>
          </div>
        </Link>
        <Link href="#" className="block group">
          <div className="text-center text-sm lower tracking-widest mb-8 text-gray-600 py-4 border-b border-black/10">
            <span>inspiring template:)</span>
            <span className="transform transition-transform group-hover:translate-x-2">
              →
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
