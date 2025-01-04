import Link from "next/link";
import { Github, Youtube } from "lucide-react";
import { RedditIcon } from "./RedditIcon";

export function Header() {
  return (
    <>
      <h4 className="text-center text-3xl md:text-4xl mb-12 font-serif">
        Beck
      </h4>

      <div className="flex justify-center gap-6 mb-12">
        <Link
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Youtube className="w-6 h-6" />
          <span className="sr-only">YouTube</span>
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="sr-only">X (Twitter)</span>
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <RedditIcon className="w-6 h-6" />
          <span className="sr-only">Reddit</span>
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
      <p className="text-center text-sm  tracking-widest mb-8 text-gray-600">
        custom built for fun :-)
      </p>

      <br />
      <br />
    </>
  );
}
