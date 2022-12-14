# ArriveCAN Case Study - By [Lazer](https://www.lazertechnologies.com/)

## What is ArriveCAN?
The [ArriveCAN](https://www.canada.ca/en/border-services-agency/services/arrivecan.html) app is a mobile and web app that was created by the Canadian federal government to offer the Advance CBSA Declaration feature. This, now optional, feature is for travellers who want to save time at certain Canadian international airports by providing their customs and immigration declaration to the CBSA in advance.

The goal of the app was to change and improve the border experience for the better.

## Purpose for building a clone
As many have learned, a recent [Globe and Mail analysis](https://www.theglobeandmail.com/politics/article-arrivecan-app-spending-government/) revealed that the total federal spending for the ArriveCAN app is on track to reach over $54 million this year, and many people are upset about just how much the federal government is spending.

Having built over [100+ different apps at Lazer](https://www.lazertechnologies.com/clients) for some of the most exciting companies in the world, it was shocking for us to see the total amount of capital that was spent to design, create, launch, and maintain the ArriveCAN app. We understand that building technology at a federal level for the entire country and for such crucial areas is no easy task - especially in a successful and seamless manner with so many different stakeholders involved. However, the true cost to implement this shouldn't have been this high - it should have been more efficient.

With this context and initial frustration, we wanted to shed light into how quickly an app like this could be made and how capital efficient it could be if the right parties were engaged in the process. The best way we believed we could do this was by sharing insight into this topic and by showing that it could be done. That's why we decided to make a simple clone version of the ArriveCAN app. Proving that this app could be built in a weekend is a good way to focus attention on the problem, but hopefully it opens up the discussion as to why Canada doesn???t have the best structure, team, resources, tools, frameworks, etc to produce new technology efficiently.

We understand that mistakes were made, but the only way to improve moving forward is to learn from mistakes that were made and to implement those lessons in future scenarios. 

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
1. Recorded a screen-recording of the app itself and the core experiences in it. It can be viewed here: [https://share.vidyard.com/watch/NweuRyHpb81hamGmPcoup2?](https://share.vidyard.com/watch/NweuRyHpb81hamGmPcoup2?)
2. Open-sourced the code needed to build the ArriveCAN clone app in React Native for Android and iOS.
3. Launched the app on App Center (for iOS) and Google Play Developer Console (for Android). Unfortunately, we cannot share a link for the public to download because the apps would need to first go through an approval process with Apple/Google which could take weeks. As of now, we can accept emails from people to send them access to the app, however it is limited to a maximum number of 100 people due to Apple/Google requirements.

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
- Accessibility 
- Complete testing (unit, integration, etc)
- More

## What the app was built with
- React Native
- Firebase
- Tailwind
- TypeScript

## Final notes
Of course we know that an app like ArriveCAN cannot actually be taken from idea to release in a weekend. However, we hope this demonstrates that there are extremely talented engineers, designers, product managers, and consultants out there who are capable of delivering outstanding work in an efficient manner. We hope the government takes this into account for the future as considering more diverse technical partners in Canada for their projects can help them tap into a larger talent pool across Canada and help them achieve their goals at a more reasonable cost to taxpayers.

Special thank you to [Dan Whiffing](https://github.com/dwhiffing) at Lazer for creating a clone in such a quick amount of time ?????? For anyone that has any questions, feel free to email us at founders@lazertechnologies.com or at [https://www.lazertechnologies.com](https://www.lazertechnologies.com/).
