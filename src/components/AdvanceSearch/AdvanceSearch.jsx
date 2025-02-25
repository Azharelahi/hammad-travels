import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const placeOptions = {
  Swat: ["Kalam", "Malam Jabba", "Bahrain", "Mingora"],
  Hunza: ["Karimabad", "Eagle’s Nest", "Attabad Lake", "Passu"],
  Murree: ["Mall Road", "Pindi Point", "Kashmir Point", "Bhurban"],
  Islamabad: ["Daman-e-Koh", "Monal", "Faisal Mosque", "Rawal Lake"],
  Karachi: ["Clifton Beach", "Mazar-e-Quaid", "Port Grand", "Dolmen Mall"],
};

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [subPlaces, setSubPlaces] = useState([]);

  const handleLocationChange = (value) => {
    console.log("Selected Location:", value);
    setSelectedPlace(value);
    setSubPlaces(placeOptions[value] || []); // Update sub-places based on selection
  };

  const handleSubPlaceChange = (value) => {
    console.log("Selected Sub-Place:", value);
  };

  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                {/* Main Place Selection */}
                <div className="item-search">
                  <CustomDropdown
                    label="Select Place"
                    onSelect={handleLocationChange}
                    options={Object.keys(placeOptions)}
                  />
                </div>

                {/* Sub-Place Selection - Only visible when a place is selected */}
                {selectedPlace && subPlaces.length > 0 && (
                  <div className="item-search">
                    <CustomDropdown
                      label="Select Sub-Place"
                      onSelect={handleSubPlaceChange}
                      options={subPlaces}
                    />
                  </div>
                )}

                {/* Check-in Date */}
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check-in</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setEndDate(null); // Reset end date when start date changes
                    }}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()} // Prevent selecting past dates
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>

                {/* Check-out Date */}
                <div className="item-search item-search-2">
                  <label className="item-search-label">Check-out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate} // Prevent checkout before check-in
                    maxDate={
                      startDate
                        ? new Date(
                            startDate.getTime() + 15 * 24 * 60 * 60 * 1000
                          )
                        : null
                    } // Limit to 15 days
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>

                {/* Guest Selection */}
                <div className="item-search bd-none">
                  <CustomDropdown
                    label="Guests"
                    onSelect={(value) => console.log("Guests:", value)}
                    options={[
                      "1 Adult",
                      "2 Adults",
                      "2 Adults, 1 Child",
                      "Family",
                    ]}
                  />
                </div>

                {/* Search Button */}
                <div className="item-search bd-none">
                  <Button className="primaryBtn flex-even d-flex justify-content-center">
                    {/* <i className="bi bi-search me-2"></i>  */}
                    Reserve and GO!
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdvanceSearch;
