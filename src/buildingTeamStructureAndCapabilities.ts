import { delimeterMsg, logF, logToHTML } from "./utils";

function teamStructureAndCapabilities() {
  logToHTML('' +
    `Examples of customer expectations (from you and your team):
    - Deliver a build every 2 weeks
    `);
}

export default function buildingTeamStructureAndCapabilities() {
  delimeterMsg('BUILDING TEAM STRUCTURE AND CAPABILITIES');
  logF(teamStructureAndCapabilities);
}

