import { Container } from "@/components/container";
import { Socials } from "@/components/socials";

export function Footer() {
  return (
    <footer className="py-5 bg-gray-50">
      <Container className="flex justify-between">
        <p>&copy; Shengle Dai</p>

        <Socials />
      </Container>
    </footer>
  );
}

export default Footer;
