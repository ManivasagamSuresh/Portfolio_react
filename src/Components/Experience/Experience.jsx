import React from "react";

function Experience() {
  return (
    <div>
      <div>
        <span className="durationExp">Nov 2023 - Present</span> <br />
        <div className="expTitle">Front-End Engineer - AYOO Care, Bangalore</div>
        <ul className="white-disc">
          <li>
            Developed the Patient Website using Next.js, leveraging Server-Side Rendering (SSR) and
            pre-rendered static pages for improved SEO and faster First Contentful Paint (FCP).
          </li>
          <li>
            Styled with Sass, Bootstrap, and integrated Redux for state management, implementing
            features like appointment booking and viewing, Razorpay payment gateway integration, and
            Zoom video consultation.
          </li>
          <li>
            Built the Admin Panel with React.js and Bootstrap, integrating Redux for efficient state
            management, and delivering features such as interactive dashboards, data visualization,
            and PDF management to streamline administration.
          </li>

          {/* <li>
            Developed patient and admin websites using modern front-end technologies:
            <ul className="white-disc-sub">
              <li>
                <span className="underline-yellow">Admin website</span>: Created with React.js and
                styled with Bootstrap, featuring interactive dashboards, data visualization, and PDF
                management for efficient administration.
              </li>
              <li>
                <span className="underline-yellow"> Patient website</span>: Built with Next.js and
                styled with Sass, providing features for appointment booking and viewing, improving
                user interaction with AYOO Care’s healthcare services.
              </li>
            </ul>
          </li>
          <li>
            Implemented key features across platforms:
            <ul className="white-disc-sub">
              <li>
                <span className="underline-yellow">Admin website</span>: Create, reschedule, and
                view appointments, request and upload documents, view PDFs, and generate statistical
                graphs for better insights.
              </li>
              <li>
                <span className="underline-yellow">Patient website</span>: Book and view
                appointments.
              </li>
            </ul>
          </li>
          <li>
            Contributed to product documentation for four platforms (two websites and two mobile
            apps), ensuring clarity and consistency.
          </li>
          <li>
            Actively participated in manual testing during app releases, identifying and fixing bugs
            to ensure a smooth user experience.
          </li>
          <li>
            Collaborated with cross-functional teams to build a seamless virtual and in-person
            healthcare experience, integrating technology into AYOO Care's smart, patient-centric
            approach.
          </li> */}
        </ul>
      </div>
      <div>
        <span className="durationExp">July 2023 - Sep 2023</span> <br />
        <div className="expTitle">Full-Stack Web Developer (Freelance) - Kaviseyonfoods</div>
        <ul className="white-disc">
          <li>
            Developed a customer-facing e-commerce platform using Next.js, TypeScript, Tailwind CSS,
            and Redux Toolkit (with persistent data), enabling seamless product browsing, cart
            management, and guest checkout.
          </li>
          
          <li>
            Integrated the Razorpay payment gateway for secure transactions, and implemented
            sign-up/sign-in via email, with support for order placement without login, to enhance
            user experience.
          </li>
          <li>
            Built real-time order tracking with dynamic status updates and tracking links, managed
            by the admin through a secure All Orders dashboard.
          </li>
        </ul>
      </div>
      <div>
        <span className="durationExp">May'23 - June'23</span> <br />
        <div className="expTitle">INTERN SOFTWARE ENGINEER - TBD-HEALTH, Remote</div>
        <ul className="white-disc">
          <li>
            Improved product website usability and UI by building frontend features using React.js and Next.js.
          </li>
          <li>
            Built backend services with Next.js and utilized AWS DynamoDB for data storage integrations.
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
        <div className="expTitle">
          Business Development Associate - Think & Learn Private Ltd (Byjus), Coimbatore
        </div>
        <ul className="white-disc">
          <li>Cold Calling</li>
          <li>Virtual and Direct sales</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
