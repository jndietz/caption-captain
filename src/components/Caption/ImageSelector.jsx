import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export const ImageSelector = () => {
    const images = [
        "https://m.media-amazon.com/images/M/MV5BZGM0YjhkZmEtNGYxYy00OTk0LThlNDgtNGQzM2YwNjU0NDQzXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_FMjpg_UX1000_.jpg",
        "https://ntvb.tmsimg.com/assets/assets/516020_v9_bc.jpg?w=270&h=360"
    ];

    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
        </Carousel.Slide>
    ));

    return (
        <Carousel maw={512} mah={768} mx="auto" withIndicators>
            {slides}
        </Carousel>
    );
}