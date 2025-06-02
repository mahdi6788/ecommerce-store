"use client";

import { ImageType } from "@/lib/types";
import GalleryTab from "./GalleryTab";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

export default function Gallery({ images }: { images: ImageType[] }) {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="hidden sm:block mx-auto mt-6 w-full max-w-2xl lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
