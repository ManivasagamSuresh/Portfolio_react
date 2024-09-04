import React from "react";

function Experience() {
  return (
    <div>
      <div>
        <span className="durationExp">May'23 - June'23</span> <br />
        <div className="expTitle">  INTERN SOFTWARE ENGINEER - TBD-HEALTH, Remote</div> 
        {/* <br /> */}
        <ul>
          <li>
            Developed features in UI/front-end for the product website and backend for partner
            services with Next.js and AWS DynamoDB
          </li>
        </ul>
      </div>
      <div>
        <span className="durationExp">Dec'21 - July'22</span> <br />
        <div className="expTitle">GET-Program Management - Violin Technologies, Chennai </div>
        {/* <br /> */}
        <ul>
          <li>Supply chain management</li>
          <li>Customer Relationship management</li>
        </ul>
      </div>
      <div>
        <span className="durationExp">Dec'20 - june'21</span>
        <br />
        <div className="expTitle">Bussiness Development Associate - Think & Learn Private Ltd (byjus), Coimbatore</div> 
        {/* <br /> */}
        <ul>
          <li>Cold Calling</li>
          <li>Virtual and Direct sales</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
