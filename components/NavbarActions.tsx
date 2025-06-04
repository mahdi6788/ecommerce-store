"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";
import { useCart } from "@/hook/use-cart";
import { useRouter } from "next/navigation";

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
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
