import { GitHub, Linkedin } from "react-feather";

// TODO: replace social icons with more interesting ones
export function Socials() {
  return (
    <ul className="flex gap-3 mb-4">
      <li className="block">
        <a
          className="text-accent-4 hover:text-accent-2"
          href="https://github.com/Shengle-Dai"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="github"
        >
          <GitHub size={18} />
        </a>
      </li>

      <li>
        <a
          className="text-accent-4 hover:text-accent-2"
          href="https://www.linkedin.com/in/shengle-dai-2b6471292/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="linkedin"
        >
          <Linkedin size={18} />
        </a>
      </li>
    </ul>
  );
}
