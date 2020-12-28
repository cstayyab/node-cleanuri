# Node-CleanURI
> A Node.js wrapper for [CleanURI.com API](https://cleanuri.com/docs)

## Basic Example
```javascript
import { shorten } from 'node-cleanuri';

let main = async () => {
    let short_url = await shorten(new URL("https://cstayyab.com"));
    console.log(short_url.toString());
}

main();
```