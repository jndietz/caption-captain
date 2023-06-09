/** @jsxImportSource @emotion/react */
import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useFiles } from "../../hooks/useFiles";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

export const ImageSelector = () => {
  const [embla, setEmbla] = useState();

  const { files, selectedImageIndex, setSelectedImageIndex } = useFiles();

  useEffect(() => {
    if (embla) embla.scrollTo(selectedImageIndex);
  }, [selectedImageIndex]);

  const slides =
    files && files.files
      ? files.files.map((file, index) => (
          <Carousel.Slide
            display="flex"
            key={index}
            css={() => css({ justifyContent: "center" })}
          >
            <div css={() => ({ height: "100%", display: "flex" })}>
              <img
                src={`data:${file.mimeType};base64,${file.imageData}`}
                css={() =>
                  css({ maxWidth: "100%", margin: "auto", maxHeight: "100%" })
                }
              />
            </div>
          </Carousel.Slide>
        ))
      : [];

  return (
    <Carousel
      align="center"
      height="90vh"
      getEmblaApi={setEmbla}
      onSlideChange={(index) => setSelectedImageIndex(index)}
    >
      {slides}
    </Carousel>
  );
};
