import React from "react";

function Experience() {
  return (
    <div>
      <div>
        <span className="durationExp">Nov 2023 - Present</span> <br />
        <div className="expTitle">Front-End Engineer - AYOO Care, Bangalore</div>
        <ul className="white-disc">
          <li>Contributed to the development of patient and admin websites for AYOO Care using modern front-end technologies.</li>
          <li>Built the admin panel with React.js, styled using Sass and Bootstrap, and integrated Redux for state management.</li>
          <li>Implemented features like interactive dashboards, data visualization, and PDF management for efficient administration.</li>
          <li>Developed the patient website using Next.js, leveraging Server-Side Rendering (SSR) to enhance SEO and pre-render static pages like blogs for improved First Contentful Paint (FCP). Styled the site with Sass and Bootstrap, integrated Redux for state management, and implemented seamless appointment booking and viewing functionalities to enhance user experience.</li>
          
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
            Contributed to the development of a customer-facing e-commerce platform using Next.js,
            TypeScript, and Tailwind CSS, with support for guest checkout. Enabled users to browse
            products, add items to the cart, and place orders seamlessly using the Razorpay payment
            gateway.
          </li>
          <li>
            Developed sign-up and sign-in functionalities via email, while also supporting order
            placement without login for a smooth user experience.
          </li>
          <li>
            Built features for real-time order tracking through the order summary page, where order
            statuses and tracking links are dynamically updated by the admin.
          </li>
          <li>
            Added admin login to manage order status and tracking link updates via the All Orders
            page.
          </li>
        </ul>
      </div>
      <div>
        <span className="durationExp">May'23 - June'23</span> <br />
        <div className="expTitle">INTERN SOFTWARE ENGINEER - TBD-HEALTH, Remote</div>
        <ul className="white-disc">
          <li>
          Enhanced the product website's usability and aesthetics by designing and implementing intuitive front-end features using React.js.
          </li>
          <li>Built robust back-end services with Next.js, streamlining partner integrations and ensuring seamless functionality.</li>
          <li>Utilized AWS DynamoDB for basic data storage solutions, ensuring efficient handling of application data.</li>
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
