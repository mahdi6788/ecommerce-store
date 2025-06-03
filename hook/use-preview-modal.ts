import { ProductType } from "@/lib/types";
import { create } from "zustand";

interface PreviewModalStore {
    isOpen:boolean,
    data?: ProductType,
    onOpen: (data:ProductType) => void,
    onClose: () => void
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductType) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
