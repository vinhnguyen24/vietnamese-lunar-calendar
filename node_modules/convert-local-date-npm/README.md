# Convert UTC Date to Local Date

This code provides a JavaScript function to convert a given UTC date to its corresponding local date.

## Function

```javascript
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
```
## Usage
To use the convertLocalDate function, import the module and call the function with a UTC date as a string:
```javascript
const convertLocalDate = require('convert-local-date');

const utcDate = '2022-03-20T12:00:00Z';
const localDate = convertLocalDate(utcDate);

console.log(localDate);
// Output: Sun Mar 20 2022 05:00:00 GMT-0700 (Pacific Daylight Time)
```
The convertLocalDate function returns a Date object representing the local date and time.

## Contributing
Contributions are welcome! Please submit a pull request with your changes.


