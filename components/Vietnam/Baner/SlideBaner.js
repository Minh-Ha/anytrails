import React from "react";
import { Component } from "react"
import vietnam from "assets/img/anytrails/halong-vietnam.jpg";
import cambodia from "assets/img/anytrails/angkor-wat-cambodia-02.jpg";
import laos from "assets/img/anytrails/luang-prabang-laos-01.jpg";
import thailand from "assets/img/anytrails/puket-thailand.jpg";
import ImageSliderBanerCard from "views/Vietnam/Hoian/ImageSliderBanerCard"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';


class SlideBaner extends Component {
  constructor(props) {
    super(props)

    this.state = {
current_card: 1,
current_img_width_as_percentage: 0
    }
  }
  componentWillMount() {
    const img_width_as_percentage = window.innerWidth < styles.media.min_width ? 100 : (styles.media.max_img_size / window.screen.availWidth) * 100;

    this.setState({ current_img_width_as_percentage: img_width_as_percentage });  
  }
  componentDidMount() {
    this.view_port.style.width = `${this.state.current_img_width_as_percentage}vw`;
    const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

    let firt_card_clone = this.card_container.children[0].cloneNode(true);
    let last_card_clone = this.card_container.children[this.card_container.children.length -1].cloneNode(true);

    this.card_container.insertBefore(last_card_clone, this.card_container.children[0]);
    this.card_container.append(firt_card_clone);
    
    this.card_container.style.transitionDuration = "0.0s";
  this.card_container.style.transform = `translate(-${img_width_in_pixels}px)`;
  window.addEventListener('resize', () => {
    const img_width_as_percentage = window.innerWidth < styles.media.min_width ? 100 : (styles.media.max_img_size / window.screen.availWidth) * 100;
    
    for (let i = 0; i < this.card_container.children.length; i++) {
      this.card_container.children[i].style.width = `${img_width_as_percentage}vw`
    }
    
    this.view_port.style.width = `${img_width_as_percentage}vw`;
    const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;
    
    this.card_container.style.transitionDuration = "0.0s";
  this.card_container.style.transform = `translate(-${this.state.current_card * img_width_in_pixels}px)`;

  })
}
handle_next = () => {
  if (this.state.current_card <this.card_container.children.length - 1) {
      let new_current_card = this.state.current_card + 1;
      const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

      this.setState({ current_card: new_current_card}, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${img_width_in_pixels * this.state.current_card}px)`;

        if (this.state.current_card === this.card_container.children.length - 1) {
            setTimeout(() => {
              this.card_container.style.transitionDuration = "0.0s";
        this.card_container.style.transform = `translate(-${img_width_in_pixels}px)`;  

        this.setState({ current_card: 1});
            },502);
        }
      });
    } else {
        return;
    }
  }

handle_previous = () => {
  if (this.state.current_card > 0) {
      let new_current_card = this.state.current_card - 1;
      const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

      this.setState({ current_card: new_current_card}, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${img_width_in_pixels * this.state.current_card}px)`;

        if (this.state.current_card === 0) {
            setTimeout(() => {
              this.card_container.style.transitionDuration = "0.0s";
        this.card_container.style.transform = `translate(-${img_width_in_pixels * (this.card_container.children.length - 2)}px)`;  

        this.setState({ current_card: this.card_container.children.length - 2});
            },502);
        }
      });
    } else {
        return;
    }
  }
  
render() {

return (
  <div>
    
    <div ref={ref_id => this.view_port =ref_id} className="view-port" style={styles.view_port}>
      <div ref={ref_id => this.card_container =ref_id} className="card-container" style={styles.card_container}>

<ImageSliderBanerCard card_number={vietnam} resize_width={this.state.current_img_width_as_percentage} />
<ImageSliderBanerCard card_number={cambodia} resize_width={this.state.current_img_width_as_percentage} />
<ImageSliderBanerCard card_number={laos} resize_width={this.state.current_img_width_as_percentage} />
<ImageSliderBanerCard card_number={thailand} resize_width={this.state.current_img_width_as_percentage} />

        </div>

      </div>
      <Button onClick={this.handle_previous} className="button_left" style={styles.button_left}><ArrowBackIosIcon /></Button>
    <Button onClick={this.handle_next} className="button_right" style={styles.button_right}><ArrowForwardIosIcon /></Button>
    </div>
  );
}
}

const styles = {
  view_port : {
// position: 'reative',
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
height: 'auto',
//overflow: 'hidden'
  },
  card_container: {
display: 'flex',
flexDirection: 'row',
width: 'fit-content',
height: 'fit-content',

  },
  media: {
max_img_size: 700,
min_width: 768
  },
  button_left: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'left',
    zIndex: 300,
    backgroundColor: 'transparent'
  },
  button_right: {
    position: 'absolute',
    top: '50%',
    right: '5%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'right',
    zIndex: 300,
    backgroundColor: 'transparent'
  },

  
}
export default SlideBaner