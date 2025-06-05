"use client";
import { ProductType } from "@/lib/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import IconButton from "./ui/IconButton";
import Currency from "./ui/Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { usePreviewModal } from "@/hook/use-preview-modal";
import { useCart } from "@/hook/use-cart";

export default function ProductCard({ product }: { product: ProductType }) {
  const cart = useCart();
  const router = useRouter();
  const previewModal = usePreviewModal();
  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation();

    previewModal.onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(product);
  };

  return (
    <div
      onClick={handleClick}
      className=" group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl relative">
        <Image
          src={product?.images[0]?.url}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className=" absolute bottom-5 px-6 w-full transition opacity-0 group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} color="green" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} color="green" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-secondary-foreground">{product.category?.name}</p>
      </div>
      {/* Price */}
      <div>
        <Currency value={product?.price} />
      </div>
    </div>
  );
}
