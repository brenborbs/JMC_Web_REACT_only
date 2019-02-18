import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import ImgO from "../../Resources/img/featured_home_2.jpg";
import ImgA from "../../Resources/img/background.jpg";
import ImgB from "../../Resources/img/ddf.JPG";

const items = [
  {
    src: ImgO,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: ImgA,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: ImgB,
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class Example extends Component {
  state = {
    activeIndex: 0
  };

  next = this.next;
  previous = this.previous;
  goToIndex = this.goToIndex;
  onExiting = this.onExiting;
  onExited = this.onExited;

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
        
      );
    });

    return (
      <div className="car-container" >
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
      </div>
    );
  }
}

export default Example;
