import { NativeEventEmitter, NativeModules } from 'react-native';

const { JWSampleModule } = NativeModules;

const PingEmitter = new NativeEventEmitter(JWSampleModule);

const sendingTimes = {}
PingEmitter.addListener('didSendPacket', ({sequenceNumber}) => {
  sendingTimes[sequenceNumber] = (new Date()).getTime()
})

const addListener = (callback) => {
  PingEmitter.addListener('didReceivePingResponsePacket', ({sequenceNumber}) => {
    const receivedTime = (new Date()).getTime()
    if (sendingTimes[sequenceNumber] == null) {
      return
    }
    const latency = receivedTime - sendingTimes[sequenceNumber]
    delete sendingTimes[sequenceNumber]
    callback(sequenceNumber, latency)
  })
}

export default {
  start: JWSampleModule.start,
  stop: JWSampleModule.stop,
  addListener,
}
