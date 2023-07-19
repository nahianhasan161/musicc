import LatestUpload from "@/components/artist/LatestUpload";
import Songs from "@/components/common/Songs";
import FeaturePlaylists from "@/components/track/FeaturePlaylists";
import React from "react";

const tracks = () => {
  return (
    <>
      <div className="sm:px-10 px-4">
        <FeaturePlaylists />
        <LatestUpload />
        <Songs />
        
      </div>
    </>
  );
};

export default tracks;
