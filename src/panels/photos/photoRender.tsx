import React from "react"
import { Layer, Stage, Image } from "react-konva";
import { useSelector } from "react-redux";
import useImage from "./useImage";

const URLImage = (image: any) => {
    const [img] = useImage(image.image.src, '');
    return (
      <Image
        image={img}
        x={100}
        y={100}
      />
    );
  };

function PhotoRender() {

    const images = useSelector((state: any) => state.photoReducer.images);

    return (
        <div className="m-4 border border-primary bg-white">
            <Stage
            width={window.innerWidth - 408}
            height={window.innerHeight - 250}
        >
            <Layer draggable>
                {images.map((image: any) => {
                    return <URLImage image={image} key={image.id}/>;
                })}
            </Layer>
        </Stage>
        </div>
    )
}

export default PhotoRender