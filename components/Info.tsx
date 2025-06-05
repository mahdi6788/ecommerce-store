'use client'
import { ProductType } from "@/lib/types";
import Currency from "./ui/Currency";
import { Button } from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hook/use-cart";
import { MouseEventHandler } from "react";

export default function Info({ data }: { data: ProductType }) {
  const cart = useCart()

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.stopPropagation();
      cart.addItem(data);
    };

  return (
    <div className="">
      <h1 className="text-3xl ">{data.name}</h1>
      <div className="flex items-end justify-between">
        <div className="text-2xl ">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold ">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-secondary"
            style={{ backgroundColor: data?.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} variant="premiere"  className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
