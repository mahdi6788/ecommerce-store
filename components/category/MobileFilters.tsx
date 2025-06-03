"use client";
import { Plus } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "../ui/Button";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "../ui/IconButton";
import Filter from "./Filter";
import { ColorType, SizeType } from "@/lib/types";

interface MobileFiltersProps {
  sizes: SizeType[];
  colors: ColorType[];
}

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 sm:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        as="div"
        className="relative z-40 sm:hidden"
        open={open}
        onClose={onClose}
      >
        {/* Backgrounf */}
        <div className="lfex inset-0 bg-black" />
        {/* Dialog position */}
        <div className="flex fixed inset-0 z-40">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close Button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div>
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
