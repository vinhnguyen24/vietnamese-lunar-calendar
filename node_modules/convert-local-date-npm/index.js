
function convertLocalDate(utcDate) {
    // Create a new Date object from the UTC date
    const date = new Date(utcDate);
  
    // Get the timezone offset in minutes
    const timezoneOffset = date.getTimezoneOffset();

    // Convert the timezone offset to milliseconds
    const timezoneOffsetMilliseconds = timezoneOffset * 60 * 1000;

    // Subtract the timezone offset from the UTC date to get the local date
    const localDate = new Date(date.getTime() - timezoneOffsetMilliseconds);

    // Return the local date
    return localDate;
    
  }
  
  module.exports = convertLocalDate