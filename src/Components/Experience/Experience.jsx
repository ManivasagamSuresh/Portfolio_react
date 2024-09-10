import React from "react";

function Experience() {
  return (
    <div>
      <div>
        <span className="durationExp">Nov 2024 - Present</span> <br />
        <div className="expTitle">Front-End Engineer - AYOO Care, Banglore</div>
        <ul className="white-disc">
          <li>
            Developed patient and admin websites using modern front-end technologies:
            <ul className="white-disc-sub">
              <li>
              {/*  */}
               <span className="underline-yellow" >Admin website</span>: Created with React.js, featuring interactive dashboards, data visualization, and PDF management for efficient administration.
              </li>
              <li>
              <span className="underline-yellow" > Patient website</span>: Built with Next.js, providing features for appointment booking and viewing, improving user interaction with AYOO Care’s healthcare services.
              </li>
            </ul>
          </li>
          <li>
            Implemented key features across platforms:
            <ul className="white-disc-sub">
              <li><span className="underline-yellow" >Admin website</span>: Create, reschedule, and view appointments, request and upload documents, view PDFs, and generate statistical graphs for better insights.</li>
              <li><span className="underline-yellow" >Patient website</span>: Book and view appointments.</li>
            </ul>
          </li>
          <li>Contributed to product documentation for four platforms (two websites and two mobile apps), ensuring clarity and consistency.</li>
          <li>Actively participated in manual testing during app releases, identifying and fixing bugs to ensure a smooth user experience.</li>
          <li>Collaborated with cross-functional teams to build a seamless virtual and in-person healthcare experience, integrating technology into AYOO Care's smart, patient-centric approach.</li>
        </ul>
      </div>

      <div>
        <span className="durationExp">May'23 - June'23</span> <br />
        <div className="expTitle">INTERN SOFTWARE ENGINEER - TBD-HEALTH, Remote</div>
        <ul className="white-disc">
          <li>
            Developed features in UI/front-end for the product website and backend for partner services with Next.js and AWS DynamoDB
          </li>
        </ul>
      </div>

      <div>
        <span className="durationExp">Dec'21 - July'22</span> <br />
        <div className="expTitle">GET-Program Management - Violin Technologies, Chennai</div>
        <ul className="white-disc">
          <li>Supply chain management</li>
          <li>Customer Relationship management</li>
        </ul>
      </div>

      <div>
        <span className="durationExp">Dec'20 - June'21</span>
        <br />
        <div className="expTitle">Business Development Associate - Think & Learn Private Ltd (Byjus), Coimbatore</div>
        <ul className="white-disc">
          <li>Cold Calling</li>
          <li>Virtual and Direct sales</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
