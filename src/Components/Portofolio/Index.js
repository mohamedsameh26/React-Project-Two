import React , {useState , useEffect} from "react";
import { PortfolioSection, PortofolioTitle, PortofolioList, PortfolioItem, Span, Overlay, OverlaySpan, ImageWrapper, Image } from "./style.js"
import axios from "axios"
const Portofolio = () => {

    const [ images , setImages ] = useState([])

    useEffect(() => {
        axios.get("js/data.json").then( response => {setImages(response.data.portfolio)} )
    } , [])

    const PortofolioImages = images.map((ImageItem) => {
        return (
            <ImageWrapper key={ImageItem.id}>
                <Image src={ImageItem.image} />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })

    return (
        <PortfolioSection>
            <PortofolioTitle><Span>My</Span> Portfolio</PortofolioTitle>
            <PortofolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortofolioList>
            
            <div className="box">
                {PortofolioImages}
            </div>
            
        </PortfolioSection>
    )
}

export default Portofolio;