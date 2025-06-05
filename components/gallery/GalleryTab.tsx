import { ImageType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import Image from "next/image";

export default function GalleryTab({ image }: { image: ImageType }) {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md ">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt="Image"
              className="object-cover object center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-primary" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
}
