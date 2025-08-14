import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/alx_logo.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <section>
          <header>
            <Image src={Logo} alt="ALX airbnb Logo" width={59} height={30} />
          </header>
          <p>
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </section>

        <section>
          <header>
            <p>Explore</p>
          </header>
          <Link href={"#"}>Apartment in Dubai</Link>
          <Link href={"#"}>Hotels in New York</Link>
          <Link href={"#"}>Villa in Spain</Link>
          <Link href={"#"}>Mansion in Indonesia</Link>
        </section>

        <section>
          <header>
            <p>Company</p>
          </header>
          <Link href={"#"}>About us</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Career</Link>
          <Link href={"#"}>Customers</Link>
          <Link href={"#"}>Brand</Link>
        </section>

        <section>
          <header>
            <p>Help</p>
          </header>
          <Link href={"#"}>Support</Link>
          <Link href={"#"}>Cancel booking</Link>
          <Link href={"#"}>Refunds Process</Link>
        </section>
      </section>

      <hr />

      <section>
        <p>
          Some hotel requires you to cancel more than 24 hours before check-in.
          Details <Link href={"#"}>here</Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
