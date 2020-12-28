# Node-CleanURI
> A Node.js wrapper for [CleanURI.com API](https://cleanuri.com/docs)

## Basic Example
```javascript
import { shorten } from 'node-cleanuri';

async main() {
    short_url = await shorten("https://cstayyab.com");
    console.log(short_url);
}

main();
```