import React from 'react';

const CarouselSlide = (props) => {
    const { index, slide, activeIndex } = props;
    return (
        <li
            className={
                index == activeIndex
                    ? "carousel-slide carousel-slide-active"
                    : "carousel-slide"
            }
        >
            { <img src={slide.href} />}
        </li>
    );

}

const CarouselLeftArrow = (props) => {
    const { onClick } = props;
    return (
        <a
            href="#"
            className="carousel-arrow carousel-arrow-left"
            onClick={onClick}
        >
            <span>&#60;</span>
        </a>
    );
}


const CarouselRightArrow = (props) => {
    const { onClick } = props;
    return (
        <a
            href="#"
            className="carousel-arrow carousel-arrow-right"
            onClick={onClick}
        >
            <span className="">&#62;</span>
        </a>
    );
}



class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();
        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div className="carousel">
                <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

                <ul className="carousel-slides">
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>

                <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

            </div>
        );
    }
}

export default Carousel;