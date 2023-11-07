import { styled } from 'styled-components';

const TopBannerWrapper = styled.section`
    div {
        width: 430px;
        height: 220px;
        img {
            width: 100%;
        }
    }
`;

export default function TopBanner() {
    return (
        <TopBannerWrapper>
            <div>
                <img
                    src="https://images.squarespace-cdn.com/content/v1/53ca9e36e4b0cb413c888185/1405823751801-YFAWTKH3331R6TOVQ2O6/photo+4.PNG?format=1500w"
                    alt="main banner"
                />
            </div>
        </TopBannerWrapper>
    );
}
