# Bluechip Utils Nest JS Library

## The Why

Just a simple utility package for Javascript/TypeScript projects
Hope it helps with:

- Request Body Validation
- Pipes
- Request Filters
- String Manipulation
- File Content Reads (.csv for now)
- Simple **"me-defined"** custom Exceptions

## How to use

Install the package

```
npm install bluechip-utils-nest
```

## Usage

```javascript

import {maskEmailAddress} from "bluechip-utils-nest/string-utils"

console.log(maskEmailAddress("email@email.com"))
    //=> e******ail.com

```
