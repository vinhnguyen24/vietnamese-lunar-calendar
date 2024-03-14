# vietnamese-lunar-calendar
# Convert UTC Date to Local Date

A simple React component that converts a Gregorian date to a Vietnamese luni-solar date.

## Installation

Install the package using npm:

```
npm install vietnamese-lunar-date
```

## Usage

Import the **`convertDate`** function from the package and use it to convert a Gregorian date to a Vietnamese luni-solar date:

```javascript
import React from 'react';
import { convertDate } from 'vietnamese-lunar-date';

function App() {
  const dateString = '13/03/2024';
  const lunarDate = convertDate(dateString);
  return (
    <div>
      <p>Gregorian date: {dateString}</p>
      <p>Vietnamese luni-solar date: {lunarDate}</p>
    </div>
  );
}

export default App;
```

The **`convertDate`** function takes a date string in the format of "dd/mm/yyyy" and returns a string in the format of "ngày xx MM yyyy", where "xx" is the day of the month, "MM" is the name of the month, and "yyyy" is the year.


## Contributing
Contributions are welcome! Please submit a pull request with your changes.


