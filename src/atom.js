import { atom } from 'recoil';

export const sliderItem = atom({
    key: 'slider_item',
    default: [
        {
            id: 0,
            image_path:
                'https://images.squarespace-cdn.com/content/v1/53ca9e36e4b0cb413c888185/1679059220647-XWVY04KN0FJZLYXCC0SU/Carousel_-_By_Day-_Updated+2.png?format=2500w',
            description: 'image-1',
        },
        {
            id: 1,
            image_path:
                'https://images.squarespace-cdn.com/content/v1/53ca9e36e4b0cb413c888185/1678374855138-SVVWK0J8JYVP0U9EOXDO/Paper.Keynote_assets.8.png?format=1500w',
            description: 'image-2',
        },
        {
            id: 2,
            image_path:
                'https://images.squarespace-cdn.com/content/v1/53ca9e36e4b0cb413c888185/1678373157547-65B0EC28T9NPV2Y1ZAQ3/Carousel_about_me.png?format=2500w',
            description: 'image-3',
        },
        {
            id: 3,
            image_path:
                'https://images.squarespace-cdn.com/content/v1/53ca9e36e4b0cb413c888185/1678386786097-C2TJS60GOS07J3HG569G/Carousel_Other_Things_+2.png?format=2500w',
            description: 'image-4',
        },
        {
            id: 4,
            image_path:
                'https://images.squarespace-cdn.com/content/v1/53ca9e36e4b0cb413c888185/1678386787062-0B2KFH2FZSJM6GIFXUSB/Carousel-_Outside_Of_Work.png?format=2500w',
            description: 'image-5',
        },
        {
            id: 5,
            image_path:
                'https://images.squarespace-cdn.com/content/v1/53ca9e36e4b0cb413c888185/1679070904432-Z8BB2AXMWZ006FU3KRAG/My_Story_Carousel.png?format=2500w',
            description: 'image-6',
        },
    ],
});
