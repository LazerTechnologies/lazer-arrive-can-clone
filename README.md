# ArriveCAN Case Study - By [Lazer](https://www.lazertechnologies.com/)

## What is ArriveCAN?
The [ArriveCAN](https://www.canada.ca/en/border-services-agency/services/arrivecan.html) app is a mobile and web app that was created by the Canadian federal government to offer the Advance CBSA Declaration feature. This, now optional, feature is for travellers who want to save time at certain Canadian international airports by providing their customs and immigration declaration to the CBSA in advance.

The goal of the app was to change and improve the border experience for the better.

## Purpose for building a clone
As many have learned, a recent [Globe and Mail analysis](https://www.theglobeandmail.com/politics/article-arrivecan-app-spending-government/) revealed that the total federal spending for the ArriveCAN app is on track to reach over $54 million this year, and many people are upset about just how much the federal government is spending.

Having built over [100+ different apps at Lazer](https://www.lazertechnologies.com/clients) for some of the most exciting companies in the world, it was shocking for us to see the total amount of capital that was spent to design, create, launch, and maintain the ArriveCAN app. We understand that building technology at a federal level for the entire country and for such crucial areas is no easy task - especially to do this successfully in the most seamless manner with so many different stakeholders involved. However the true cost to implement this so shouldn't have been this high, it should have been more efficient.

With this context and initial frustration, we wanted to shed light into how quickly an app like this could be made and how capital efficient it could be to do so, if the right parties were engaged in the process. The best way we believed we could do this was by providing insight into this topic and by actually showing that it could be done. That's why we decided to make a simple clone version of the ArriveCAN app.

We understand that mistakes were made, but the only way to improve moving forward is to learn from mistakes that we're made and to implement those lssons in future scenarios.

## A bit more empathy
It's easy to the criticize the government for all of their mistakes and downfalls, but to outline the situation further, creating an app that is meant to improve the Canadian border experience for the entire country has many challenges associated with it.

- Creating a well-crafted experience and design that is intuitive, quick, simple, and includes all the core flows and components to solve the required goals takes time, iteration, care, and creativity. Doing this for all types of people in the most diverse country in the world needs to be taken into account here.
- Handling sensitive information from individuals, such as passport information, birth days, addresses, phone numbers, and more, needs to be done in the proper compliant manner, according to regulatory standards, and with an extreme focus on security. It also requires integration with other existing systems across the government and country to ensure success.
- Aligning all parties in and out of government requires clear and aligned communication, alongside buy-in.
- Executing the launch and distribution of the app, once complete, requires fluid integration with all parties involved as well as making the entire country aware of the new standards and process.
- Ongoing governance, monitoring, and maintenance of the app as scale increases and as changes in the world occurs requires time and correct decisions to be made.
- And there's definitely a lot more pieces behind the scenes that we don't see or think about.

We of course can build a cloned version of the ArriveCAN app extremely quickly and cheaply because we have the blueprint right infront of us, but we need to have some empathy for all of the pieces outside of purely building the app and experience. $54 million of empathy is unlikely though.

## What we've done
With all this being said, we wanted to showcase how quickly the core app could be made. You can see from the Github commits when we started building this clone and how long it took to build out the app. The app itself was built over the Thanksgiving long-weekend by Dan Whiffing at Lazer and he has done an amazing job with it.

As a result, we've done the following:
1. Recorded a screen-recording of the app itself and the core experiences in it. It can be viewed here:
2. Open-sourced the code needed to build the ArriveCAN clone app in React Native for Android and iOS.
3. Launched the app on Testflight (for iOS) and Google Play Console (for Android). The reason it is distributed here is because to properly launch these apps on their respective app stores would take a few weeks and the goal here is mainly for case studies purposes.

## What the ArriveCAN clone app includes and doesn't include
The ArriveCAN clone app includes the primary experience needed to accomplish it's goal - a faster, improved border experience. This includes:
- Authentication - creating a new account and logging into an account
- Onboarding flow to educate the user on the experience and to help the user set up their traveller(s) profiles
- Traveller(s) flow to create your traveller profile
- Advance CBSA Declaration flow to specify which traveller(s) are travelling, where their travelling from/to, the requirements needed to travel, the questions needed to be answered, unique travel declaration form upon completion
- Persistent state management
- Ability to add in French or Spanish translations
- Navigation within the app between the home page, travellers page, resources page, and settings page
- More

What we chose not to incorporate into this clone app is:
- Forgot password flow
- Optical character recognition (OCR) feature to scan a passport and automatically inser the details from it into a form
- Actual translating of the copy into French and Spanish
- Integration into the appropriate federal government backend systems

## What the app was built with
- React Native
- Firebase
- Tailwind
- TypeScript

## Notes
Special thank you to Dan Whiffing at Lazer for creating a clone in such a quick amount of time ❤️ For anyone that has any questions, feel free to email us at founders@lazertechnologies.com
