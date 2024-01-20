"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";
// import { ProductWithPrice } from "@/types";
// import Modal from "@/components/Modal";

// interface ModalProviderProps {
//   products: ProductWithPrice[];
// }

const ModalProvider=()=>{
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* <AuthModal />
      <SubscribeModal products={products} />
      <UploadModal /> */}
      {/* <Modal title="test model"
      description="Test discription"
      isOpen
      onChange={()=>{}}
      >
        Test Children
      </Modal> */}
      <AuthModal/>
    </>
  );
}

export default ModalProvider;
