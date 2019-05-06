# eth-libp2p-kad-dht


## Table of Contents

- [eth-libp2p-kad-dht](#eth-libp2p-kad-dht)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
    - [npm](#npm)
    - [Use in Node.js](#use-in-nodejs)
  - [API](#api)
    - [Peer Routing](#peer-routing)
    - [Content Routing](#content-routing)
    - [Peer Discovery](#peer-discovery)
  - [Contribute](#contribute)
  - [License](#license)

## Install

### npm

```sh
> npm i libp2p-kad-dht
```

### Use in Node.js

```js
const KadDHT = require('libp2p-kad-dht')
```

## API

See https://libp2p.github.io/js-libp2p-kad-dht for the auto generated docs.

The libp2p-kad-dht module offers 3 APIs: Peer Routing, Content Routing and Peer Discovery.

### Peer Routing

[![](https://raw.githubusercontent.com/libp2p/interface-peer-routing/master/img/badge.png)](https://github.com/libp2p/interface-peer-routing)

### Content Routing

[![](https://raw.githubusercontent.com/libp2p/interface-content-routing/master/img/badge.png)](https://github.com/libp2p/interface-content-routing)

### Peer Discovery

[![](https://github.com/libp2p/interface-peer-discovery/raw/master/img/badge.png)](https://github.com/libp2p/interface-peer-discovery)

`libp2p-kad-dht` provides a discovery service called `Random Walk` (random walks on the DHT to discover more nodes). It is accessible through `dht.randomWalk` and exposes the [Peer Discovery interface](https://github.com/libp2p/interface-peer-discovery).

## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/libp2p/js-libp2p-ipfs/issues)!

This repository falls under the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

MIT - Protocol Labs 2017
