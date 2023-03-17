/** @jsxImportSource @emotion/react */
import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useFiles } from '../../hooks/useFiles';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

export const ImageSelector = () => {

    const [embla, setEmbla] = useState();

    const { files, selectedImageIndex, setSelectedImageIndex } = useFiles();

    useEffect(() => {
        if (embla) embla.scrollTo(selectedImageIndex);
    }, [selectedImageIndex])

    const slides = files ? files.files.map((file, index) => (
        <Carousel.Slide mah="90vh" display="flex" key={index}>
            <img css={() => css({ marginLeft: "auto", marginRight: "auto" })} src={`data:${file.mimeType};base64,${file.imageData}`} />
        </Carousel.Slide>
    )) : [];

    return (
        <Carousel getEmblaApi={setEmbla} height="100%" onSlideChange={index => setSelectedImageIndex(index)}>
            {slides}
        </Carousel>
    );
}