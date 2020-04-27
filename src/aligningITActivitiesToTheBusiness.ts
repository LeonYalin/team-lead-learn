import { delimeterMsg, logF, logToHTML } from "./utils";

function businessAlignment() {
  logToHTML('' +
    `Aligning IT to business means using work with the business when developing the strategic plan.

    We can say the following:
    - What my team is doing now is...
    - It results in adding business value...
    - I can prove it

    The signs of a failure - NOT aligning IT to business are:
    - Working on a wrong priorities
    - Not helping the business succeed
    - Feel less connected to the business
    - Mistrust and misunderstanding

    We should go from "Fuzzy" business goals to "Measurable" goals:
    - Increase revenue => Increase product revenue by 25%
    - Avoid costs => Reduce non-selling inventory by 25%
    - Improve customer satisfaction => Rewrite the UI to be more user-friendly

    Steps to understand the business:
    - understand the business goals of the company
    - understand how your work aligns with the business
    - create relationship with the customers
    - document everything !!!

    Map IT goals to the business goals:
    - increase revenue by 25% => add 100 new courses to the online catalog
    - increase student signup by 15% => enhance the ecom portal to support PayPal
    - increase corporate signup by 10% => enable corporate account management from the admin portal

    Map IT goals to the IT projects/activities:
    - add 100 new courses to the online catalog => Project A, B
    - enhance the ecom portal to support PayPal => Projects C, D and E
    - enable corporate account management from the admin portal => Operational Task 25.3, 25.4

    Setting priorities:
    Priority 1: High Important projects
    Priority 2: Medium important projects
    Backlog: Non-active projects

    The activity card:
    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
    | 1/1/20 - start date                                         3/1/20 - end date |
    |                                                                               |
    |                                Project 1.1.2                                  |
    |                                                                               |
    | target/customer - 1.2/CEO points                                  - 80 hours  |
    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
    `);
}

export default function aligningITActivitiesToTheBusiness() {
  delimeterMsg('ALIGNING IT ACTIVITIES TO THE BUSINESS');
  logF(businessAlignment);
}

