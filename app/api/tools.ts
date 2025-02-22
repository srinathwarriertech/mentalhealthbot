import { tool } from "@langchain/core/tools";
export const getDiscoveryCallDetails = tool((input) => {
    // Option1
    // In a real scenario, you would connect this to Google Calendar API to check the next available slot.

    //Temp Option2 - Hardcoded response
    // return "The next avaialable slot for a Discovery Call is on Thu Feb 27 2025."


    //Temp Option3 - Dynamically Calculated response set to next Monday.
    var d = new Date();
    d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);      
    return "The next avaialable slot for a Discovery Call is on "+d.toDateString();

  }, {
    name: "getDiscoveryCall",
    description: "Call to get the next available Discovery call slot.",
  });