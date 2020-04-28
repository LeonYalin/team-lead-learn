import { delimeterMsg, logF, logToHTML } from "./utils";

function customerExpectations() {
  logToHTML('' +
    `Examples of customer expectations (from you and your team):
    - Deliver a build every 2 weeks
    - Hold a weekly status meeting
    - Be on a call for ecommece support
    - Understand my business
    - Always deliver on time
    - Never have a bug

    Your customers:
    - Business leader
    - Steering group
    - Business focal point
    - Your manager
    - End users
    `);
}

function qualityCommunication() {
  logToHTML('' +
    `Customer communications should follow these principles:
    - Consistently communicate
    - Open communication
    - Transparency
    - Honesty
    - TRUST

    The importand thing is to manage Written communication:
    - Use emails to contact with customers
    - Update progress via emails, increase transparency
    - Write meetings agendas and outcomes, send metting summary emails
    - Write reports, weekly status emails
    - Market your team and mention appreciation to your team in emails
    `);
}

function knowYourLimitations() {
  logToHTML('' +
    `Your resources are not infinite. Limit customers:
    - Show customer your projects to make him understand you are busy
    - change priorities for some tasks / move things to backlog
    - change budget / add resources / people / time
    - Time of day - make shure customer understands your working hours, and not calling you 24/7

    Get real for your statements:
    - clear timelines / estimations (add buffer if neccesary)
    - pay attention to the holidays and vacations people will take on certain months
    - be practical and honest, explain why do you have long estimations instead of giving wrong numbers
    - be positive and optimistic. It also impacts your tem as they feel it too
    `);
}

function howToSayNo() {
  logToHTML('' +
    `Learn how to say no. Examples of these are:
    - Yes, but... e,g, Yes, I can do it by next week but I will need 2 more contractors.
    - Choose... Choose one of the alternatives for something
    - Demonstrate you understand

    Reality vs Expectations:
    - Set the expectation, ask what are must-haves, and what is nice-to-have
    - Explain obstacles and possible problems we might encounter
    - Delegate 'up'
    - Leverage influencers, ask other people to help
    `);
}

function serviceLevelAgreements() {
  logToHTML('' +
    `Service Level Agreements (SLA) are contracts (documents) between you and the customer that contains expectations from your team. Benefits:
    - Expectations are specific
    - Expectations are written
    - Expectations are measured

    SLA is constructed from:
    - Service description - a description of a provided service
    - Business alignment - service timeline an davailability
    - Reliability - who is responcible for what
    - Responsiveness - contacts, support, escalation
    - Problem reporting - call center, monitoring, statistics
    - Monitoring and reporting - if we have problems, who will solve it and how much it will cost, what happen if we don't
    - Constraints -what we will not do
    `);
}

export default function managingCustomerExpectations() {
  delimeterMsg('MANAGING CUSTOMER EXPECTATIONS');
  logF(customerExpectations);
  logF(qualityCommunication);
  logF(knowYourLimitations);
  logF(howToSayNo);
  logF(serviceLevelAgreements);
}

