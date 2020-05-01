import { delimeterMsg, logF, logToHTML } from "./utils";

function teamStructureAndCapabilities() {
  logToHTML('' +
    `We can structure the team by the following criterias:
    - Customer (group working for the specific customer)
    - Application or Product (group working for the specific product)
    - Service or Function (group working for the specific service)
    - Scalability (easy to ad people to specific group)

    Assign a leader to every team, so he will be the focal point for his group.
    Every team member can have one or more roles, and role can be divider into multiple people.
    Make sure all people understand their roles, responsibilites and duties.

    We can divide team skills by the following groups:
    - Technial: java, angular ect...
    - Communication: writing, presentations, meetings, stand ups, walk arounds, interviews, interpersonal
    - Leadership: embrace changes, earn credibility, desire to lead, build trust, planning skills, metrics, marketing skills
    If the team needs to learn some skills, we can prioritize, check budget and ask for training/courses.

    Good Team Lead skills are:
    - Delegation
    - Leadership
    - Communication
    - Succession (build someone that can replace you when you are on vacation ect...)

    Lunch and Learn
    - A technical presentation about something
    - Presented by a team member
    - Held during lunch time

    Dinner and Develop
    - Organized by manager
    - Held about Dinner time (16.00-19.00)
    - All team members get some practical task, in unformal atmosphere with food (hackaton-like)

    Meetups and 1-2 day vendor courses
    - Don't send the whole team, only the manager or 1-2 specific people
    - make a presentation after he returns

    Improve technical knowledge of the people in the team:
    - Assign tasks to a person according to the area in which he lacks knowledge (not big tasks)
    - provide a mentor to help

    Performance reviews and 1-1's;
    - If the HR does not schedule these, a manager should do it on his own
    - occured once a month / 3 months
    - Help identifiy and collect issues and needs
    - improve skills and performance and overall team performance
    - provide positive feedback and areas of improvement
    - ask for feedback about you
    - ask for feedback about your employees from other people in the company (should be anonimous)
    - build relationships and increase motivation
    - Document everything
    - Doron's way - ask some architectural question to start a conversation

    Motivating your team:
    - Connect with the business
    - Connect with the customer
    - Connect with team members
    `);
}

export default function buildingTeamStructureAndCapabilities() {
  delimeterMsg('BUILDING TEAM STRUCTURE AND CAPABILITIES');
  logF(teamStructureAndCapabilities);
}

