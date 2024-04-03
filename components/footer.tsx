import { Socials } from "@/components/socials";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">&copy; Shengle Dai</div>
        <div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
