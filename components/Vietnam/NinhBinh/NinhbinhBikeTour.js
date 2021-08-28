import React from "react";
import classNames from "classnames";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks";
import { Typography } from "@material-ui/core";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import { container } from "assets/jss/material-kit-react";
import SectionCarousel from "views/Components/Sections/SectionCarousel";
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from "views/Vietnam/Drawer"
import HeaderLinksVietnam from "components/Header/HeaderLinksVietnam";
import HanoiBreadcrumbs from '../Breadcrumb/HanoiBreadcrumb';
import NinhbinhSlide from "views/Vietnam/Hanoi/NinhbinhSlideBaner";
import Container from '@material-ui/core/Container';
const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    // const { ...rest } = props;
    return (
        <>
        <div>
            

    </div> 
        <div>
            <CssBaseline />
           
<Header
    rightLinks={<HeaderLinksVietnam />}
    
    fixed
    // // color="transparent"
    // color= 'black'
    // changecolorOnScroll={{
    //     height: 300,
    //     color: "blue"
    // }}
    // {...rest}
/>


     
      



{/* <div className={classes.containerTour}> */}
<div className={classes.heroContent}>
<Container maxWidth="xl">
<NinhbinhSlide />
</Container>
    <Container >
    

    <HanoiBreadcrumbs />  
      
<Typography>
    
    <h2>Ninh Binh Biking Tour</h2>
    <p>Ninh Binh is about 100 km from Hanoi. Where there are many world heritage sites and historical sites. Hoa Lu, a small town in Ninh Binh province was ancient capital of Vietnam, where the first King of Vietnam chose it as the first capital because it is surrounded by Karst, perfect spot for protection. Ninh Binh was under the sea millions of years ago, the bottom of the sea formed the beautiful Karst today.
Taking a Hoa Lu Ninh Binh Bike Tour One Day with AnyTrails you will cycle among the karsts, see unique villages in North Vietnam and talk to the local people. Coming back from the trip you will have a great experience and unforgettable Holiday.</p>
</Typography>
{/* <SectionCarousel /> */}
<Typography>
<h3>Hight light</h3>
Professional and knowledgeable guide: Our guide are well trained and experts of the area.
Great quality of bikes:  BIANCHI mountain bike.
Unique bike route: Short option, 30 km from Van Long to Hoa Lu. The scenery is spectacular, amazing karsts on one side and the rice field on the other side. It is quiet and wonderful. Long option, ride 20 km more after lunch. We ride in the middle of Trang An, the Word Heritage Site.
Thoughtful trip designed: Going active you always enjoy more and learn more. One this trip you can experience the bamboo sampan ride, enjoy the beauty karst from water level. Visiting the first capital of Vietnam, you will learn more history of our country.

    <h3>Itinerary</h3>
    7:00 pick you up at your hotel and drive 1 hours 45 minutes to Van Long.
8:45 Arrive in Van Long and we start biking from here, along the dyke of Van Long, that is a beautiful scenery of Karst, where King Kong movie (skull island) is filmed here . Amazing mountain on one side and flat rice field on the other side. We ride through some villages and experience local daily life.
11:00  We ride to Hoa Lu,the first capital of Vietnam before it moved to Thang Long (Hanoi today). You have chance to explore some relic of the ancient capital and the temples of the first dynasties and learn about the history of Vietnam.
12:00 Lunch is served in the local restaurant.
13:00 After lunch continue riding in the middle of Trang An, Which is recognized as world natural heritage site in 2014
14:00 Finish the bike ride at Thung Nang and take a rowing boat among amazing karsts. Thung Nang is one of the most beautiful spot in Trang An area and out of tourist path.
17:00 Leaving Thung Nagn and drive back to Hanoi.
18:45 Arrive at your hotel.

End Hoa Lu Ninh Binh Bike Tour.
    <h3>What is included</h3>
    Inclusion
Round trip transfer from Hanoi by van
Snack and water on tour
Sightseeing tickets
Rowing-boat trip in Van Long
Lunch in the local restaurant
Bicycle
English speaking guide
Exclusion
Personal expenses
Travel Insurance
Tips, Gratuities
Other services not listed in inclusion column
</Typography>

</Container>

</div>

 
      <Footer />
        </div>
        </>
    );


}