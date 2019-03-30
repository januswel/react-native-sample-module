import { NativeEventEmitter, NativeModules } from 'react-native';

const { JWSampleModule } = NativeModules;
const PingEmitter = new NativeEventEmitter(JWSampleModule);

const start = hostName => JWSampleModule.start(hostName)
const stop = () => JWSampleModule.stop()

const sendingTime = {}
PingEmitter.addListener('didSendPacket', ({sequenceNumber}) => {
  sendingTime[sequenceNumber] = (new Date()).getTime()
})

const addListener = (callback) => {
  PingEmitter.addListener('didReceivePingResponsePacket', ({sequenceNumber}) => {
    const receivedTime = (new Date()).getTime()
    const delta = receivedTime - sendingTime[sequenceNumber]
    delete sendingTime[sequenceNumber]
    callback(sequenceNumber, delta)
  })
}

export default {
  start,
  stop,
  addListener,
}
