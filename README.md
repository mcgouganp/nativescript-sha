# Nativescript-SHA ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

[![npm](https://img.shields.io/npm/v/nativescript-sha.svg)](https://www.npmjs.com/package/nativescript-sha)
[![npm](https://img.shields.io/npm/dm/nativescript-sha.svg)](https://www.npmjs.com/package/nativescript-sha)
[![Build Status](https://travis-ci.org/mcgouganp/nativescript-sha.svg?branch=master)](https://travis-ci.org/mcgouganp/nativescript-sha)

This plugin gives access to native SHA generation code on iOS and Android.

Supports SHA-1, SHA-224, SHA-256, SHA-384 and SHA-512.

Also support HMAC for all supported SHA hashes.

## Prerequisites / Requirements

None.

## Installation

To install, simply run:

```javascript
tns plugin add nativescript-sha
```

## Usage

```typescript
import { Sha256, HmacSha256 } from 'nativescript-sha';

console.log(`Hash is ${Sha256("this is our test data")}`);

console.log(`Hmac is ${HmacSha256("secretkey", "this is our test data")}`);
```

## License

Apache License Version 2.0, January 2004
