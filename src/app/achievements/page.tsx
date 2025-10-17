import React from "react";
import RightAch from "@/components/RightAch";
import Image from "@/public/test-image.jpg";

const Achievements = () => {
  return (
    <>
      {/* Example usage of RightAch component */}
      <RightAch image={Image.src} text="Test Achievement" />
    </>
  );
};

export default Achievements;
