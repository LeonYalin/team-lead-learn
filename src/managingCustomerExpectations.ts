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

    Customer communications should follow these principles:
    - Consistently communicate
    - Open communication
    - Transparency
    - Honesty
    - TRUST

    The importand thing is to manage written communication:
    - Use emails to contact with customers
    - Update progress via emails, increase transparency
    - Write meetings agendas and outcomes, send metting summary emails
    - Write reports, weekly status emails and presentations
    - Market your team, mention and appreciate your team in emails

    Your resources are not infinite. Limit customers:
    - Show customer your projects to make him understand you are busy
    - Change priorities for some tasks / move things to backlog
    - Change budget / add resources / people / time
    - Time of day - make sure customer understands your working hours, and not calling you 24/7

    Get real for your statements:
    - Clear timelines / estimations (add buffer if neccesary)
    - Pay attention to the holidays and vacations people will take on certain months
    - Be practical and honest, explain why do you have long estimations instead of giving wrong numbers
    - Be positive and optimistic. It also impacts your team as they feel it too

    Learn how to say no. Examples of these are:
    - Yes, but... e,g, Yes, I can do it by next week but I will need 2 more contractors.
    - Choose... Choose one of the alternatives for something
    - Demonstrate you understand

    Reality vs Expectations:
    - Set the expectation, ask what are must-haves, and what is nice-to-have
    - Explain obstacles and possible problems we might encounter
    - Delegate 'up'
    - Leverage influencers, ask other people to help

    Service Level Agreements (SLA) are contracts (documents) between you and the customer that contains expectations from your team. Benefits:
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

    Customer Service quadrant:
    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
    |_____________|_____________________________________|______________________________________ |
    |             | Phone Support                       | Time To Repair                        |
    | Good        |                                     |                                       |
    | Service     |                                     |                                       |
    | ____________| ____________________________________|______________________________________ |
    |             |                                     | DB Security                           |
    | Not So Good |                                     | Buggy Software                        |
    | Service     |                                     |                                       |
    |             | ____________________________________|______________________________________ |
    |             | Not So Important                    | Pretty Important                      |
    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

    You should focus on: Pretty Importnt - Not So Good Service!
    `);
}

export default function managingCustomerExpectations() {
  delimeterMsg('MANAGING CUSTOMER EXPECTATIONS');
  logF(customerExpectations);
}

