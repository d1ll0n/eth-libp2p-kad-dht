'use strict'

const times = require('async/times')
const PeerId = require('eth-peer-id')
const PeerInfo = require('eth-peer-info')

// Creates multiple PeerInfos
function createPeerInfo (n, callback) {
  times(n, (i, cb) => PeerId.create({ bits: 512 }, cb), (err, ids) => {
    if (err) { return callback(err) }
    callback(null, ids.map((i) => new PeerInfo(i)))
  })
}

module.exports = createPeerInfo
