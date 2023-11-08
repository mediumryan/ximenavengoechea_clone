import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useRecoilValue } from 'recoil';
import { sliderItem } from '../atom';
import { styled } from 'styled-components';

const SliderWrapper = styled.section`
    display: flex;
    justify-content: center;
`;

const CarouselWrapper = styled.div`
    width: 65%;
`;

export default function Slider() {
    const listItem = useRecoilValue(sliderItem);

    return (
        <SliderWrapper>
            <CarouselWrapper>
                <Carousel
                    showStatus={false}
                    showIndicators={false}
                    thumbWidth={100}
                >
                    {listItem.map((item) => {
                        return (
                            <div key={item.id}>
                                <img
                                    src={item.image_path}
                                    alt={item.description}
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </CarouselWrapper>
        </SliderWrapper>
    );
}
