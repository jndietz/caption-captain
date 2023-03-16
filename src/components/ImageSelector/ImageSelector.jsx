import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useFiles } from '../../hooks/useFiles';
import { useEffect, useState } from 'react';

import useEmblaCarousel from 'embla-carousel-react'

export const ImageSelector = () => {

    const [embla, setEmbla] = useState();

    const { files, selectedImageIndex, setSelectedImageIndex } = useFiles();

    useEffect(() => {
        console.log(selectedImageIndex);
        if (embla) embla.scrollTo(selectedImageIndex);
    }, [selectedImageIndex])

    const slides = files ? files.files.map((file, index) => (
        <Carousel.Slide key={index}>
            <Image src={`data:${file.mimeType};base64,${file.imageData}`} />
        </Carousel.Slide>
    )) : [];

    return (
        <Carousel getEmblaApi={setEmbla} maw={512} mah={768} mx="auto" onSlideChange={index => setSelectedImageIndex(index)}>
            {slides}
        </Carousel>
    );
}