import { ProductType } from "@/lib/types";
import Image from "next/image";
import IconButton from "./ui/IconButton";
import Currency from "./ui/Currency";
import { X } from "lucide-react";
import { useCart } from "@/hook/use-cart";

export default function CartItem({ data }: { data: ProductType }) {
  const cart = useCart();
  const onRemove = () => cart.removeItem(data.id);
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          alt="image"
          src={data.images[0].url}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton icon={<X size={15} />} onClick={onRemove} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-secondary-foreground">{data.color.name}</p>
            <p className="text-secondary-foreground ml-4 border-l border-secondary pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}
