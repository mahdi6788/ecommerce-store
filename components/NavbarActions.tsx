"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";
import { useCart } from "@/hook/use-cart";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function NavbarActions() {
  const cart = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-x-4 ml-auto ">
      <ThemeToggle />
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-primary-foreground px-4 py-2"
      >
        <ShoppingBag size={20} color="green" />
        <span className="ml-2 text-sm font-medium text-secondary-foreground">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
