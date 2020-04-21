import { delimeterMsg, logF, logToHTML } from "./utils";

function teamLeadRole() {
  logToHTML('' +
    `Team Lead - getting started
    `);
}

export default function gettingStarted() {
  delimeterMsg('GETTING STARTED');
  logF(teamLeadRole);
}