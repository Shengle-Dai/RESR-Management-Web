import { GitHub, Linkedin } from "react-feather";

export function Socials() {
  return (
    <ul className="flex gap-3">
      <li className="block">
        <a
          className="text-accent-4 hover:text-accent-2"
          href="https://github.com/Shengle-Dai"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="github"
        >
          <GitHub size={20} />
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
          <Linkedin size={20} />
        </a>
      </li>
    </ul>
  );
}
