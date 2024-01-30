"use client";
import React from "react";

const PrivacyPage: React.FC = () => {
  const lastModified = new Date(document.lastModified);
  return (
    <div className="flex flex-col gap-4">
      <h1>Privacy Policy</h1>
      <h5>Last updated: {lastModified.toDateString()}</h5>
      <h2>1. Introduction</h2>
      <p>
        Welcome to SaveMyPast, a service provided by Joshua Keith Pearson, the
        developer. This Privacy Policy is intended to help you understand how we
        collect, use, and safeguard your personal information. By using
        SaveMyPast, you agree to the terms outlined in this policy.
      </p>
      <h2>2. Information We Collect</h2>
      <p>
        We only collect the minimal amount of information necessary for the
        proper functioning of the app. This includes:
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-12 indent-2">
        <li>
          Authentication Data: We use Clerk for authentication, which involves
          collecting and securely storing the necessary information to verify
          your identity.
        </li>
        <li>
          Usage Data: We collect data on how you use the app, such as the time
          you spend on each page and the frequency of your visits. This data is
          used to improve the app and provide you with a better experience.
        </li>
        <li>
          Cookies: We use cookies to store your session data, such as your
          authentication status and preferences. You may disable cookies in your
          browser settings, but this may affect the functionality of the app.
        </li>
        <li>
          Communication Data: If you contact us, we may collect and store the
          information you provide, such as your name and email address, to
          respond to your inquiries.
        </li>
        <li>
          Account Data: If you create an account, we store the information you
          provide, such as your name and email address, to personalize your
          experience and provide you with a more seamless service.
        </li>
        <li>
          Prompt Data: We store the prompts you create and your responses to
          them to provide you with a personalized experience and allow you to
          revisit your past responses.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>
        Your personal information is solely used for user authentication
        purposes, your usage of the app is used to determine what matters most
        to you based on use time. We do not use your data for any other purpose.
      </p>
      <h2>4. Data Security</h2>
      <p>
        We take the security of your information seriously. SaveMyPast
        implements industry-standard measures to protect your data from
        unauthorized access, disclosure, alteration, and destruction, as
        provided by Google Firebase and Clerk
      </p>
      <h2>5. Third-Party Services</h2>
      <p>
        SaveMyPast uses third-party services Clerk and Firebase for
        authentication and storage, respectively. Please review their privacy
        policies for a comprehensive understanding of how they handle your data.
      </p>
      <h2>6. User Control and Opt-Out</h2>
      <p>
        You have the right to control the information you provide. If you wish
        to opt-out or have your data removed, you may delete your account
        through the account settings page. We retain no data upon account
        deletion.
      </p>
      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We reserve the right to update our privacy policy to reflect changes in
        our practices. Check this page periodically for any updates.
      </p>
    </div>
  );
};

export default PrivacyPage;
