import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import ApiConfig from "./ApiConfig";

import Skeleton from "react-loading-skeleton";

import { Modal, Button } from "react-bootstrap";
function CalculatorComponent() {
  const [countries, setCountries] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("13");
  const [selectedBranchId, setSelectedBranchId] = useState("2");
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState("100.00");
  const [rate, setRate] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");
  const [staticCurrencyCode, setstaticCurrencyCode] = useState("");
  const [fees, setFees] = useState("00");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [calculatedAmount, setCalculatedAmount] = useState("");
  const [collectionTypes, setCollectionTypes] = useState([]);
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [selectedCollectionType, setSelectedCollectionType] = useState("");
  const [selectedCollectionTypeName, setSelectedCollectionTypeName] =
    useState("");
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [payementtypeId, setpaymenttypeId] = useState("");
  const [countryId, setcountryId] = useState("");
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [BasecurrencyData, setBasecurencydata] = useState([]);
  const [BasecurrencyId, setbasecurrencyId] = useState("");
  const [baseCurrencyData, setBaseCurrencyData] = useState([]);
  const [baseCurrencyId1, setBaseCurrencyId1] = useState("");
  const [selectedDeliveryType, setSelectedDeliveryType] = useState("");
  const [selectBasecountryId, setselectBasecountryId] = useState("");
  const [youSendInput, setyouSendInput] = useState(false);
  const [RecipentGetInput, setRecipentGetInput] = useState(false);
  const [loading, setloading] = useState(false);
  const [userEnteredAmount, setUserEnteredAmount] = useState(amount);
  const [minimumFractionDigits, setMinimumFractionDigits] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "../ApiConfig.js";
  const location = useLocation();
  const amountTimeoutRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery2, setSearchQuery2] = useState("");
  const [totalToPay, setTotalToPay] = useState(0);

  const filteredCurrencies = baseCurrencyData.filter(
    (currency) =>
      currency.countryCurrency
        .toLowerCase()
        .includes(searchQuery2.toLowerCase()) ||
      currency.countryName.toLowerCase().includes(searchQuery2.toLowerCase())
  );

  const handleOpenModal = (event) => {
    event.preventDefault(); // Prevent page reload
    setShowModal(true); // Open modal when "Change" button is clicked
  };

  const handlePaymentTypeChange = (payTypeID) => {
    setSelectedPaymentType(payTypeID);
    setpaymenttypeId(payTypeID.toString());
    setShowModal(false); // Close modal after selection
  };

  // const baseCountryFlags = {
  //   1: 'assets/img/flags/gbp.png',
  //   6: 'assets/img/flags/eur.png',
  // };
  const [baseCountryFlag, setBaseCountryFlag] = useState("");
  const [baseCurrencyCode, setBaseCurrencyCode] = useState("");
  const [foreignCurrencyCode, setForeignCurrencyCode] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const countryDropdownRef = useRef(null);
  const currencyDropdownRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close country dropdown
      }
      if (
        currencyDropdownRef.current &&
        !currencyDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // Close currency dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const pathParts = location.pathname.split("_");
    if (pathParts.length > 1) {
      const countryFromURL = pathParts[1];
      const matchedCountry = countries.find(
        (country) =>
          country.countryName.toLowerCase() === countryFromURL.toLowerCase()
      );
      if (matchedCountry) {
        setSelectedCountry(matchedCountry.countryID.toString());
        setSelectedCountryDetails(selectedCountry);
        setCurrencyCode(matchedCountry.countryCurrency);
      }
    }
  }, [location.pathname, countries]);

  // Existing useEffect (unchanged)
  useEffect(() => {
    const pathParts = location.pathname.split("_");
    if (pathParts.length > 1) {
      const countryFromURL = pathParts[1];
      const matchedCountry = countries.find(
        (country) =>
          country.countryName.toLowerCase() === countryFromURL.toLowerCase()
      );
      if (matchedCountry) {
        setSelectedCountry(matchedCountry.countryID.toString());
        setSelectedCountryDetails(selectedCountry);
        setCurrencyCode(matchedCountry.countryCurrency);
      }
    }
  }, [location.pathname, countries]);

  const handleDeliveryTypeChange = (event) => {
    event.preventDefault();
    const selectedDeliveryType = event.target.value;
    setSelectedDeliveryType(selectedDeliveryType);
  };

  const handleCollectionTypeChange = (event) => {
    event.preventDefault();
    const selectedCollectionType = event.target.value;
    setSelectedCollectionType(selectedCollectionType);
  };

  const handlePayementTypeChange = (event) => {
    event.preventDefault();
    const selectedPaymentType = event.target.value;
    setpaymenttypeId(selectedPaymentType);
  };

  const handleCountryChange = (event) => {
    const newCountryId = event.target.value;
    setSelectedCountry(newCountryId);
    const newCountryDetails = countries.find(
      (country) => country.countryID.toString() === newCountryId
    );
    setSelectedCountryDetails(newCountryDetails);
    if (newCountryDetails) {
      setCurrencyCode(newCountryDetails.countryCurrency);
    }
  };
  const handleCalculatedAmountChange = (event) => {
    event.preventDefault();
    let newCalculatedAmount = event.target.value;
    setRecipentGetInput(true);
    // Remove any non-numeric characters from the input
    newCalculatedAmount = newCalculatedAmount.replace(/[^0-9.]/g, "");

    // Ensure the input does not exceed 7 digits
    if (newCalculatedAmount.length > 12) {
      newCalculatedAmount = newCalculatedAmount.slice(0, 0);
    }

    // Update the state with the cleaned amount
    setCalculatedAmount(newCalculatedAmount);
    setUserEnteredAmount(newCalculatedAmount / rate || "");
    setAmount(newCalculatedAmount / rate || "");
  };

  const handleAmountChange = (event) => {
    event.preventDefault();
    const newAmount = event.target.value;
    setyouSendInput(true);
    // Remove leading zeros
    const cleanedAmount = newAmount.replace(/^0+/, "");

    // Check if the cleaned amount is a valid number
    if (!isNaN(cleanedAmount)) {
      // Limit the input to 8 digits
      if (cleanedAmount.length <= 12) {
        setAmount(cleanedAmount);
        setUserEnteredAmount(cleanedAmount);
      } else {
        // Allow input after 8 digits
        setAmount(cleanedAmount.substring(0, 0)); // Limit to 8 digits
        setUserEnteredAmount(cleanedAmount.substring(0, 0));
      }
    } else {
      // Handle non-numeric input
      setAmount("0");
      setUserEnteredAmount("0");
      setRate("0");
      setFees("0");
      setCalculatedAmount("0");
    }
  };
  const handleAmountBlur = (event) => {
    let value = event.target.value;

    // Remove any non-numeric characters (except for decimal points)
    value = value.replace(/[^0-9.]/g, "");

    // Check if the value is a valid number
    if (!isNaN(value) && value !== "") {
      // Convert to float
      const numericValue = parseFloat(value);

      // Only format if the value is greater than 0
      if (numericValue > 0) {
        const formattedValue = numericValue.toFixed(2);
        setAmount(formattedValue); // Update the state
        setUserEnteredAmount(formattedValue); // Update user entered amount
        event.target.value = formattedValue; // Ensure input reflects formatted value
      } else {
        // If the value is 0 or empty, reset to an empty string
        setAmount("0");
        setUserEnteredAmount("0");
        event.target.value = "0";
      }
    } else {
      // If not a valid number, reset to an empty string
      setAmount("0");
      setUserEnteredAmount("0");
      event.target.value = "0";
    }
  };

  const handleInputFocusOut = () => {
    setMinimumFractionDigits(2);
  };

  const handleInputFocus = () => {
    // Set minimumFractionDigits to 0 when focus is in
    setMinimumFractionDigits(0);
  };

  const handleContinue = () => {
    // Construct the new URL with calculated values
    const contactUsPath = `https://qfremit.com/app/app-login?amount=${encodeURIComponent(
      calculatedAmount
    )}&rate=${encodeURIComponent(rate)}&fees=${encodeURIComponent(
      fees
    )}&currencyCode=${encodeURIComponent(currencyCode)}`;

    // Open the URL in a new tab
    window.open(contactUsPath, "_blank");
  };

  // Fetch countries on component mount
  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/checkrateslistcountry/basecurrencylist`, {
        clientID: "1",
        branchID: selectedBranchId,
      })
      .then((response) => {
        if (response?.data?.response && response?.data?.data) {
          // Filter the response to find only the currency with BaseCurrencyID === 22
          const filteredCurrency = response.data.data.find(
            (item) => item.baseCurrencyID === 22
          );

          if (filteredCurrency) {
            // If you want to store it as a single object
            setBaseCurrencyData([filteredCurrency]); // wrapping in [] if your component expects an array
            setbasecurrencyId(filteredCurrency.baseCurrencyID.toString());
            setBaseCurrencyCode(filteredCurrency.countryCurrency);
          } else {
            // Optional: clear state if not found
            setBaseCurrencyData([]);
            setbasecurrencyId("");
            setBaseCurrencyCode("");
          }
        }
      })

      .catch((error) => console.error("Error fetching payment types:", error));
  }, [selectedBranchId]);

  const handleBasecountryIdChange = (selectedId) => {
    const currency = baseCurrencyData.find(
      (item) => item.baseCurrencyID.toString() === selectedId.toString()
    );

    if (currency) {
      setBaseCurrencyId1(selectedId);
      setBaseCurrencyCode(currency.countryCurrency);
      setSelectedCurrency({
        countryFlag: currency.countryFlag || "images/flags/gbp.png",
        countryCurrency: currency.countryCurrency || "GBP",
      });
    }
  };

  useEffect(() => {
    if (selectedCountry && selectedBranchId) {
      setloading(true); // Start loading before API call

      axios
        .post(`${ApiConfig.baseUrl}/currency/currencylist`, {
          countryID: selectedCountry.toString(),
          clientID: "1",
        })
        .then((response) => {
          const data = response?.data?.data;

          if (Array.isArray(data) && data.length > 0) {
            setCurrencyList(data);
            const firstCurrency = data[0];

            if (firstCurrency) {
              setCurrencyCode(firstCurrency.currencyCode);
              setSelectedCurrency(firstCurrency);
              setForeignCurrencyCode(
                firstCurrency.currencyID?.toString() || ""
              );
              setstaticCurrencyCode(firstCurrency.currencyCode);
            }
          } else {
            console.warn("Currency list is empty or invalid:", response?.data);
            setCurrencyList([]); // Ensure it does not remain undefined
          }
        })
        .catch((error) => {
          console.error("Error fetching currency list:", error);
        })
        .finally(() => {
          setloading(false); // Stop loading in all cases
        });
    }
  }, [selectedCountry, selectedBranchId]);

  const handleCurrencyChange = (e) => {
    const selectedCode = e.target.value;
    setCurrencyCode(selectedCode);

    // Find the selected currency from the list
    const selectedCurrency = currencyList.find(
      (currency) => currency.currencyCode === selectedCode
    );

    if (selectedCurrency) {
      setSelectedCurrency(selectedCurrency);
      setForeignCurrencyCode(selectedCurrency.currencyID.toString()); // Update currencyID dynamically
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  // Fetch countries from API
  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/checkrateslistcountry/checklistcountry`, {
        clientID: "1",
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setCountries(response.data.data);
          // Set the first country as default
          const defaultCountry = response.data.data[1];
          setSelectedCountry(defaultCountry.countryID);
          setSelectedCountryDetails(defaultCountry);
        }
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Handle country selection
  const handleSelect = (country) => {
    setSelectedCountry(country.countryID);
    setSelectedCountryDetails(country);
    setIsOpen(false);
  };

  /* const filteredCountries = countries.filter((country) => {
    const query = searchQuery.toLowerCase();
    return (
      (country.currencyCode &&
        country.currencyCode.toLowerCase().includes(query)) ||
      (country.countryCurrency &&
        country.countryCurrency.toLowerCase().includes(query)) ||
      (country.countryName && country.countryName.toLowerCase().includes(query))
    );
  });*/
  const filteredCountries = countries.filter(
    (country) =>
      country.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.countryFlag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/collection/getcollectiontype`, {
        clientID: "1",
        branchID: selectedBranchId,
        countryID: selectedCountry.toString(),
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setCollectionTypes(response.data.data);
          const defaultCollectionType = response.data.data[0];
          if (defaultCollectionType) {
            setSelectedCollectionType(
              defaultCollectionType.paymentCollectionTypeID.toString()
            );
            setSelectedCollectionTypeName(defaultCollectionType.typeName);
          }
        }
      })
      .catch((error) =>
        console.error("Error fetching collection types:", error)
      );
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/deliverytype/getdeliverytype`, {
        clientID: "1",
        branchID: selectedBranchId,
        countryID: selectedCountry.toString(),
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setDeliveryTypes(response.data.data);
          const defaultDeliveryType = response.data.data[0];
          if (defaultDeliveryType) {
            setSelectedDeliveryType(
              defaultDeliveryType.deliveryTypeID.toString()
            );
          }
        }
      })
      .catch((error) => console.error("Error fetching delivery types:", error));
  }, [selectedCountry, selectedBranchId]);

  useEffect(() => {
    axios
      .post(`${ApiConfig.baseUrl}/paymenttype/getpaytypes`, {
        clientID: "1",
        branchID: selectedBranchId,
        customerID: "",
        baseCountryID:
          baseCurrencyId1.toString() || BasecurrencyId.toString() || "1",
        isApp: "0",
      })
      .then((response) => {
        if (response.data.response && response.data.data) {
          setPaymentTypes(response.data.data);
          const defaultCollectionType = response.data.data[0];
          if (defaultCollectionType) {
            setpaymenttypeId(defaultCollectionType.payTypeID.toString());
            setSelectedPaymentType(defaultCollectionType.payType);
          }
        }
      })
      .catch((error) => console.error("Error fetching payment types:", error));
  }, [selectedBranchId, countryId, baseCurrencyId1]);

  useEffect(() => {
    if (amount && selectedCountry && currencyCode) {
      if (amountTimeoutRef.current) {
        clearTimeout(amountTimeoutRef.current);
      }
      setIsLoading(true);
      amountTimeoutRef.current = setTimeout(() => {
        axios
          .post(
            `${ApiConfig.baseUrl}/checkrateslistcountry/checkrateslistcountry`,
            {
              clientID: "1",
              countryID: selectedCountry ,
              paymentTypeID: payementtypeId,
              paymentDepositTypeID: selectedCollectionType,
              deliveryTypeID: selectedDeliveryType,
              transferAmount: amount,
              currencyCode: currencyCode,
              branchID: selectedBranchId,
              BaseCurrencyID: baseCurrencyId1 || BasecurrencyId,
              baseCurrencyCode: baseCurrencyCode,
              foreignCurrencyCode: foreignCurrencyCode,
            }
          )
          .then((response) => {
            if (
              response.data.response &&
              response.data.data &&
              response.data.data.length > 0
            ) {
              let foundRate = false;
              response.data.data.forEach((rateData) => {
                const rateValue = rateData.rate;
                const minAmount = rateData.minAmount;
                const maxAmount = rateData.maxAmount;
                if (
                  rateValue !== 0 &&
                  amount >= minAmount &&
                  amount <= maxAmount
                ) {
                  setRate(rateValue);
                  setFees(rateData.transferFeesGBP);
                  setCalculatedAmount((amount * rateValue).toFixed(2) || "");
                  foundRate = true;
                }
              });
              if (!foundRate) {
                setRate("0");
                setAmount("0");
                setCalculatedAmount("0");
                setRecipentGetInput(false);
              }
            } else {
              setRate("0");
              setAmount("0");
              setCalculatedAmount("0");
              setyouSendInput(false);
              setUserEnteredAmount("0");
            }
          })
          .catch((error) =>
            console.error("Error fetching rates and fees:", error)
          )
          .finally(() => setIsLoading(false));
      }, 1000);
    }
  }, [
    amount,
    selectedCountry,
    currencyCode,
    selectedCollectionType,
    baseCurrencyCode,
    baseCurrencyId1,
    BasecurrencyId,
    foreignCurrencyCode,
    payementtypeId,
    selectedDeliveryType,
    selectedBranchId,
    selectBasecountryId,
  ]);

  const [formattedTotal, setFormattedTotal] = useState(null);

  useEffect(() => {
    // Delay calculation only if both amount and rate are valid numbers
    if (!isNaN(parseFloat(amount)) && !isNaN(parseFloat(fees))) {
      const total = parseFloat(amount) + parseFloat(fees);

      // Optional delay to simulate loading
      setTimeout(() => {
        setFormattedTotal(total.toFixed(2));
      }, 500); // 5 second delay
    }
  }, [amount, fees]);
  return (
    <>
      <div className="cal_css">
        <div className="service-charge-wrap">
          <form className="charge-form">
            <div className="d-flex justify-content-center card calculator">
              <label
                htmlFor="send_money"
                style={{ textAlign: "left", marginBottom: "5px" }}
              >
                You Send
              </label>
              <div className="d-flex justify-content-between gap-3 w-100">
                <input
                  type="text"
                  id="Number1"
                  name="send_money"
                  className="send-money-input "
                  // value={amount === "" ? "" : amount}
                  value={
                    amount === ""
                      ? "0"
                      : amount.toLocaleString("en-US", {
                          minimumFractionDigits: minimumFractionDigits,
                          maximumFractionDigits: 2,
                        })
                  }
                  onChange={handleAmountChange}
                  //onBlur={handleInputBlur} // Call the blur handler here
                  onBlur={handleAmountBlur}
                  disabled={rate === 0 ? true : false}
                  maxLength={12}
                  placeholder="0.00"
                />

                <div className="form-group ">
                  <div
                    className="send-money-side "
                    onClick={() => {
                      setIsDropdownOpen(!isDropdownOpen);
                      setIsOpen(false); // optional: close other dropdown if open
                    }}
                  >
                    <div className="  common-img">
                      <img
                        className="  common-img"
                        src={
                          selectedCurrency?.countryFlag ||
                          "images/flags/gbp.png"
                        }
                        alt="Selected Country Flag"
                      />
                    </div>
                    <div className="font-bold">
                      {selectedCurrency?.countryCurrency || "GBP"}
                    </div>
                    <div className="ml-2">▼</div>
                  </div>
                </div>
                {/* Dropdown for Currency Selection */}
              </div>
              {isDropdownOpen && (
                <div
                  className="w-100"
                  style={{ display: "flex", justifyContent: "center" }}
                  ref={currencyDropdownRef}
                >
                  <div
                    className="absolute mt-2 dropdown-clc w-full bg-white border rounded-lg shadow-lg z-10"
                    style={{
                      position: "absolute",
                      width: "100%",
                      maxWidth: "400px",
                      left: "20px",
                      zIndex: "999",
                      borderRadius: "10px",
                      marginLeft: "5px",
                    }}
                  >
                    {/* Search Box */}
                    <div className="p-2 flex items-center border-b">
                      <input
                        type="text"
                        style={{
                          fontWeight: "400",
                          borderRadius: "8px",
                          fontSize: "16px",
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #000",
                        }}
                        placeholder="Search currency..."
                        value={searchQuery2}
                        onChange={(e) => setSearchQuery2(e.target.value)}
                      />
                    </div>

                    {/* Currency List with Flags */}
                    <ul className="currency-list p-2">
                      {filteredCurrencies.length > 0 ? (
                        [...filteredCurrencies]
                          .sort((a, b) =>
                            a.countryName.localeCompare(b.countryName)
                          )
                          .map((currency) => (
                            <li
                              key={currency.baseCurrencyID}
                              className="d-flex gap-3 align-items-center p-3 hover:bg-gray-200 cursor-pointer"
                              onClick={() => {
                                handleBasecountryIdChange(
                                  currency.baseCurrencyID
                                );
                                setIsDropdownOpen(false); // Close dropdown on selection
                              }}
                            >
                              <img
                                src={currency.countryFlag}
                                alt={currency.countryCurrency}
                                className="w-6 h-4 mr-2 common-img"
                              />

                              <span
                                style={{ fontWeight: "600", fontSize: "17px" }}
                              >
                                {currency.countryCurrency}
                              </span>
                              <span
                                style={{ fontWeight: "500", fontSize: "16px" }}
                              >
                                {currency.countryName}
                              </span>
                            </li>
                          ))
                      ) : (
                        <li className="text-center p-3 text-gray-500">
                          No results found
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              <select
                label="Collection Type "
                value={selectedCollectionType}
                onChange={handleCollectionTypeChange}
                className="select-delivery d-none"
              >
                {Array.isArray(collectionTypes) &&
                  collectionTypes.map((collectionType) => (
                    <option
                      key={collectionType.paymentCollectionTypeID}
                      value={collectionType.paymentCollectionTypeID}
                    >
                      {collectionType.typeName}
                    </option>
                  ))}
              </select>
              <select
                label="Payment Type"
                value={payementtypeId}
                onChange={handlePayementTypeChange}
                className="select-delivery d-none"
              >
                {paymentTypes.map((paymentTypes) => (
                  <option
                    key={paymentTypes.paymentCollectionTypeID}
                    value={paymentTypes.payTypeID}
                  >
                    {paymentTypes?.payType}
                  </option>
                ))}
              </select>
              <select
                label="Delevery Type "
                value={selectedDeliveryType}
                onChange={handleDeliveryTypeChange}
                className="select-delivery d-none"
              >
                {deliveryTypes.map((deliveryTypes) => (
                  <option
                    key={deliveryTypes.deliveryTypeID}
                    value={deliveryTypes.deliveryTypeID}
                  >
                    {deliveryTypes?.deliveryType}
                  </option>
                ))}
              </select>

              <label
                htmlFor="send_money "
                style={{
                  textAlign: "left",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                Recipient gets
              </label>
              <div className="d-flex justify-content-between gap-3 w-100">
                <input
                  className="send-money-input w-100"
                  type="text"
                  id="Number2"
                  name="received_money"
                  value={calculatedAmount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} // Comma-separated format
                  onChange={handleCalculatedAmountChange}
                  onBlur={handleInputFocusOut}
                  onFocus={handleInputFocus}
                  disabled={rate === 0 ? true : false}
                  maxLength={12} // Limiting input to 12 characters
                  placeholder="0.00"
                />
                <div className="form-group ">
                  <div
                    className="send-money-side"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setIsDropdownOpen(false); // optional: close other dropdown if open
                    }}
                  >
                    {loading ? (
                      <Skeleton width={80} height={30} />
                    ) : (
                      <>
                        {selectedCountryDetails && (
                          <div className="common-img">
                            <img
                              src={`/${selectedCountryDetails.countryFlag.toLowerCase()}`}
                              alt={selectedCountryDetails.countryName}
                              className="w-6 h-6 mr-2 common-img"
                            />
                          </div>
                        )}
                        <div>
                          {selectedCountryDetails && (
                            <span style={{ fontWeight: "600" }}>
                              {selectedCountryDetails.countryFlag
                                .split("/")
                                .pop()
                                .split(".")[0]
                                .toUpperCase()}
                            </span>
                          )}
                        </div>
                        <span>▼</span>
                      </>
                    )}
                  </div>

                  {/* Dropdown List */}
                  {isOpen && (
                    <div
                      className="w-100 "
                      style={{ display: "flex", justifyContent: "center" }}
                      ref={countryDropdownRef}
                    >
                      <div
                        className="absolute mt-2 dropdown-clc w-full bg-white border rounded-lg shadow-lg z-10"
                        style={{
                          position: "absolute",
                          width: "100%",
                          maxWidth: "100%",
                          left: "20px",
                          zIndex: "999",
                          borderRadius: "10px",
                          maxWidth: "400px",
                        }}
                      >
                        {/* Search Box */}
                        <div className="p-2 flex items-center border-b">
                          <input
                            type="text"
                            className=""
                            style={{
                              fontWeight: "400",
                              borderRadius: "8px",
                              fontSize: "16px",
                              width: "100%",
                              padding: "10px",
                              border: "1px solid #000",
                            }}
                            placeholder="Type a  country name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>

                        {/* Country List */}
                        <ul
                          className="max-h-60 overflow-y-auto"
                          style={{ height: "40vh" }}
                        >
                        {filteredCountries && filteredCountries.length > 0 ? (
  [...filteredCountries]
    .sort((a, b) => {
      if (a.countryID === 13) return -1;
      if (b.countryID === 13) return 1;
      return a.countryName.localeCompare(b.countryName);
    })
    .map((country) => (
      <li
        key={country.countryID}
        className="d-flex gap-3 align-items-center p-3 hover:bg-gray-200 cursor-pointer"
        onClick={() => handleSelect(country)}
        style={{ fontWeight: "600" }}
      >
        <img
          src={`/${country.countryFlag?.toLowerCase()}`}
          alt={country.countryName}
          className="w-6 h-6 mr-2 common-img"
          style={{ width: "28px", height: "28px" }}
        />
        <span
          style={{
            fontWeight: "600",
            fontSize: "18px",
          }}
        >
          {country.countryFlag
            ?.split("/")
            .pop()
            .split(".")[0]
            .toUpperCase()}
        </span>
        <span
          style={{
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          {country.countryName}
        </span>
      </li>
    ))
) : (
  <li className="p-3 text-gray-500" style={{ fontWeight: "600" }}>
    No results found
  </li>
)}

                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Type Box */}
              <label
                htmlFor="send_money "
                style={{
                  textAlign: "left",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                Paying with
              </label>
              <div
                className="d-flex  justify-content-between align-items-center  p-2 rounded"
                style={{ border: "1px solid #000" }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="payment-icon bg-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4098 0.121271C11.7848 -0.0404238 12.216 -0.0404238 12.591 0.121271L23.0912 4.62141C23.7475 4.90313 24.1131 5.60625 23.9678 6.3C23.8272 6.99844 23.2131 7.45782 22.4584 7.5V7.875C22.4584 8.49844 21.999 9 21.3334 9H2.58304C2.00366 9 1.45802 8.49844 1.45802 7.875V7.5C0.788166 7.45782 0.173999 6.99844 0.0307841 6.3C-0.112412 5.60625 0.254672 4.90313 0.909106 4.62141L11.4098 0.121271ZM12.0004 6C12.8301 6 13.5004 5.32969 13.5004 4.5C13.5004 3.67172 12.8301 3.00001 12.0004 3.00001C11.1707 3.00001 10.5004 3.67172 10.5004 4.5C10.5004 5.32969 11.1707 6 12.0004 6ZM5.9581 19.5H7.83313V10.5H10.8332V19.5H13.1254V10.5H16.1255V19.5H18.0005V10.5H21.0005V19.7016C21.0287 19.7156 21.0568 19.6922 21.0849 19.7531L23.335 21.2531C23.8834 21.6187 24.1272 22.3031 23.935 22.9359C23.7428 23.5688 23.1615 24 22.5006 24H1.45802C0.839261 24 0.256032 23.5688 0.0644971 22.9359C-0.127084 22.3031 0.118076 21.6187 0.668164 21.2531L2.9182 19.7531C2.94492 19.6922 2.97258 19.7156 2.95805 19.7016V10.5H5.9581V19.5Z"
                        fill="#7E7E7E"
                      />
                    </svg>
                  </div>
                  <span className="ms-3 fw-bold">
                    {paymentTypes.find(
                      (type) => type.payTypeID === selectedPaymentType
                    )?.payType || "Bank Transfer"}
                  </span>
                </div>
                <button
                  className="btn mb-0  btn-light text-success d-flex align-items-center"
                  style={{
                    background: "#faf5d1",
                    color: "#000",
                    borderRadius: "40px",
                    fontSize: "14px",
                  }}
                  onClick={handleOpenModal}
                >
                  Change <i className="ms-1 bi bi-chevron-right"></i>
                </button>
              </div>

              {/* Modal for Selecting Payment Type */}
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Select Payment Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul className="list-group ">
                    {paymentTypes.map((paymentType) => (
                      <li
                        key={paymentType.payTypeID}
                        className={`list-group-item d-flex mb-3 justify-content-between align-items-center ${
                          paymentType.payTypeID === selectedPaymentType
                            ? "active"
                            : ""
                        }`}
                        style={{
                          cursor: "pointer",
                          border: "1px solid #000",
                          borderRadius: "10px",
                        }}
                        onClick={() =>
                          handlePaymentTypeChange(paymentType.payTypeID)
                        }
                      >
                        {paymentType.payType}
                        {paymentType.payTypeID === selectedPaymentType && (
                          <i
                            className="bi bi-check-circle-fill text-success"
                            style={{ fontSize: "18px" }}
                          ></i>
                        )}
                      </li>
                    ))}
                  </ul>
                </Modal.Body>
              </Modal>
              <div
                className=" mt-3 p-3"
                style={{
                  border: "1px solid #000",
                  borderRadius: "8px",
                }}
              >
                <div className="d-flex justify-content-between">
                  <span>
                    Rate Guaranteed <span>1 GBP</span>{" "}
                  </span>
                  <span style={{ color: "#000", fontWeight: "600" }}>
                    {rate !== 0 ? `${rate}` : "0"}{" "}
                    {selectedCountryDetails?.countryFlag
                      ? selectedCountryDetails.countryFlag
                          .split("/")
                          .pop()
                          .split(".")[0]
                          .toUpperCase()
                      : "DEFAULT"}
                  </span>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <span>Our Fees</span>
                  <span style={{ color: "#000", fontWeight: "600" }}>
                    {rate !== 0 ? fees : "0"} GBP
                  </span>
                </div>
                <hr style={{ border: "1px solid #333", margin: "10px 0" }} />
                <div className="d-flex justify-content-between mt-2">
                  <span style={{ fontWeight: "bold" }}>
                    Total included fees{" "}
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {formattedTotal ? (
                      `${formattedTotal} GBP`
                    ) : (
                      <Skeleton width={100} height={20} />
                    )}
                  </span>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className=" text-center ">
                  {/* <a
                    href="#"
                    className="btn-masco btn-fill--up btn-masco rounded-pill btn-fill--up  "
                    style={{ textAlign: "center" }}
                    // onClick={handleContinue}
                  >
                
                  </a> */}

                 
                                 <Button className="btn-masco mt-3 rounded-pill">
                                  Send Money
                                 </Button>
                         
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CalculatorComponent;
