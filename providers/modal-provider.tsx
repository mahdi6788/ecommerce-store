'use client'

import PreviewModal from "@/components/PreviewModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted){
    return null
  }

  return(
    <>
    <PreviewModal/>
    </>
  )
};
