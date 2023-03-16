/** @jsxImportSource @emotion/react */
import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useFiles } from '../../hooks/useFiles';
import { useEffect, useState } from 'react';

export const ImageSelector = () => {

    const [embla, setEmbla] = useState();

    const { files, selectedImageIndex, setSelectedImageIndex } = useFiles();

    useEffect(() => {
        if (embla) embla.scrollTo(selectedImageIndex);
    }, [selectedImageIndex])

    const slides = files ? files.files.map((file, index) => (
        <Carousel.Slide key={index}>
            <Image src={`data:${file.mimeType};base64,${file.imageData}`} />
        </Carousel.Slide>
    )) : [];

    return (
        <Carousel mah="100%" getEmblaApi={setEmbla} onSlideChange={index => setSelectedImageIndex(index)}>
            {slides}
        </Carousel>
    );
}