import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListingPlatformForm from "./ListingPlatformForm";
import ContactForm from "./ContactForm";
import PropertyDetailForm from "./PropertyDetailForm";
import TimelineForm from "./TimelineForm";
import WhoAreYouForm from "./WhoAreYouForm";
import HouseWorthForm from "./HouseWorthForm";

const SellComponent = () => {
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
    beds: 0,
    baths: 0,
    size: 0,
    yearBuilt: 0,
    price: 0.0,
  });

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleHouseWorthChange = (event) => {
    const { name, value } = event.target;
    setHouseWorth({ ...houseWorth, [name]: value });
  };

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

  const handleProperttDetailChange = (event) => {
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
              <Link to="/sell">Worth</Link>
            </li>
            <li>
              <Link to="/sell/whoareyou">Who Are You?</Link>
            </li>
            <li>
              <Link to="/sell/listingplatform">Listing Platform</Link>
            </li>
            <li>
              <Link to="/sell/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/sell/propertydetail">Property Detail</Link>
            </li>
            <li>
              <Link to="/sell/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route exact path="/sell/">
            <HouseWorthForm
              houseWorthInfo={houseWorth}
              handleHouseWorthChange={handleHouseWorthChange}
            />
          </Route>
          <Route path="/sell/whoareyou">
            <WhoAreYouForm
              houseWorthInfo={houseWorth}
              whoAreYouInfo={whoAreYou}
              handleWhoAreYouChange={handleWhoAreYouChange}
            />
          </Route>
          <Route path="/sell/listingplatform">
            <ListingPlatformForm
              listingPlatformInfo={listingPlatform}
              handleListingPlatformChange={handleListingPlatformChange}
            />
          </Route>
          <Route path="/sell/timeline">
            <TimelineForm
              timelineInfo={timeline}
              handleTimelineChange={handleTimelineChange}
            />
          </Route>
          <Route path="/sell/propertyDetail">
            <PropertyDetailForm
              propertyDetailInfo={propertyDetail}
              handleProperttDetailChange={handleProperttDetailChange}
            />
          </Route>
          <Route path="/sell/contact">
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

export default SellComponent;
