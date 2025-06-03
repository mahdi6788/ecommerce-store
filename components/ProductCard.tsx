"use client";
import { ProductType } from "@/lib/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import IconButton from "./ui/IconButton";
import Currency from "./ui/Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { usePreviewModal } from "@/hook/use-preview-modal";

export default function ProductCard({ product }: { product: ProductType }) {
  const router = useRouter();
  const previewModal = usePreviewModal()
  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };
  const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.stopPropagation()

    previewModal.onOpen(product)
  }
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
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
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category?.name}</p>
      </div>
      {/* Price */}
      <div>
        <Currency value={product?.price} />
      </div>
    </div>
  );
}
