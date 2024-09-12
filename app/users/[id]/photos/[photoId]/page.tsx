import React from "react";

interface PhotoDetail {
  params: { id: number; photoId: number };
}
const PhotoDetailPage = ({ params: { id, photoId } }: PhotoDetail) => {
  return (
    <div>
      <span>
        Photo Detail {id} {photoId}
      </span>
    </div>
  );
};

export default PhotoDetailPage;
