#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

#import <React/RCTEventEmitter.h>

#import "SimplePing.h"

@interface JWSampleModule : RCTEventEmitter <RCTBridgeModule, SimplePingDelegate>

@property (nonatomic, strong, readwrite, nullable) SimplePing *pinger;
@property (nonatomic, strong, readwrite, nullable) NSTimer *sendTimer;

@end
