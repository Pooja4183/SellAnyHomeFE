import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingPlatformForm from "./ListingPlatformForm";
import ContactForm from "./ContactForm";
import PropertyDetailForm from "./PropertyDetailForm";
import TimelineForm from "./TimelineForm";
import WhoAreYouForm from "./WhoAreYouForm";

const SellForm = () => {
  const [houseWorth, setHouseWorth] = useState({
    address: "",
  });
  const [whoAreYou, setWhoAreYou] = useState({
    sellerType: "",
  });

  const [listingPlatform, setListingPlatform] = useState({
    isListed: "",
  });

  const [timeline, setTimeline] = useState({
    duration: "",
  });

  const [propertyDetail, setPropertyDetail] = useState({
    type: "",
    beds: "",
    baths: "",
    size: 0,
    yearBuilt: 0,
    price: 0.0,
  });

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleWhoAreYouChange = (event) => {
    const { name, value } = event.target;
    setWhoAreYou({ ...whoAreYou, [name]: value });
  };

  const handleListingPlatformChange = (event) => {
    const { name, value } = event.target;
    setListingPlatform({ ...listingPlatform, [name]: value });
  };

  const handleTimelineChange = (event) => {
    const { name, value } = event.target;
    setTimeline({ ...timeline, [name]: value });
  };

  const handlePropertyDetailChange = (event) => {
    const { name, value } = event.target;
    setPropertyDetail({ ...propertyDetail, [name]: value });
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  // const handleReviewInfoChange = event => {
  //   setReviewInfo(event.target.value);
  // };

  return (
    <Router>
      <div>
       {/* <nav>
          <ul>
            <li>
              <Link to="/sell-landing">Worth</Link>
            </li>
            <li>
              <Link to="/sell-landing/whoareyou">Who Are You?</Link>
            </li>
            <li>
              <Link to="/sell-landing/listingplatform">Listing Platform</Link>
            </li>
            <li>
              <Link to="/sell-landing/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/sell-landing/propertydetail">Property Detail</Link>
            </li>
            <li>
              <Link to="/sell-landing/contact">Contact</Link>
            </li>
          </ul>
        </nav>  */}

        <Switch>
          <Route path="/sell-landing" exact>
            <WhoAreYouForm
              houseWorthInfo={houseWorth}
              whoAreYouInfo={whoAreYou}
              handleWhoAreYouChange={handleWhoAreYouChange}
            />
          </Route>
          <Route path="/sell-landing/listingplatform" exact>
            <ListingPlatformForm
              houseWorthInfo={houseWorth}
              whoAreYouInfo={whoAreYou}
              listingPlatformInfo={listingPlatform}
              handleListingPlatformChange={handleListingPlatformChange}
            />
          </Route>
          <Route path="/sell-landing/timeline" exact>
            <TimelineForm
              houseWorthInfo={houseWorth}
              whoAreYouInfo={whoAreYou}
              listingPlatformInfo={listingPlatform}
              timelineInfo={timeline}
              handleTimelineChange={handleTimelineChange}
            />
          </Route>
          <Route path="/sell-landing/propertyDetail" exact>
            <PropertyDetailForm
               houseWorthInfo={houseWorth}
               whoAreYouInfo={whoAreYou}
               listingPlatformInfo={listingPlatform}
               timelineInfo={timeline}
              propertyDetailInfo={propertyDetail}
              handlePropertyDetailChange={handlePropertyDetailChange}
            />
          </Route>
          <Route path="/sell-landing/contact" exact>
            <ContactForm
              houseWorthInfo={houseWorth}
              whoAreYouInfo={whoAreYou}
              listingPlatformInfo={listingPlatform}
              propertyDetailInfo={propertyDetail}
              timelineInfo={timeline}
              contactInfo={contact}
              handleContactChange={handleContactChange}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default SellForm;
