import React from "react";

const OrdenSummaryComponent = () => {
  return (
    <div className="container_ordenSummary">
      <div className="ordenSummary">
        <div className="image"></div>
        <div className="orden_info">
          <h3>Order Summary</h3>
          <p className="orden_text">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like
          </p>
          <div className="orden_payment">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                <path
                  fill="#717FA6"
                  fill-rule="nonzero"
                  d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                />
              </g>
            </svg>
            <div>
              <p>
                <b>Annual Plan</b>
              </p>
              <p className="price">$59.99/year</p>
            </div>
            <a href="#actionChange"> Change</a>
          </div>
          <button className="pay">Proceed to Payment</button>
          <button className="cancel">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrdenSummaryComponent;
