import Link from "next/link";

import Container from "@/components/Container";
import MainNav from "@/components/MainNav";
import NavbarActions from "@/components/NavbarActions";
import { getCategories } from "@/actions/get-categories";

export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="flex gap-2 ml-4 lg:ml-0">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
