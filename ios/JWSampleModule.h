#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

#import "SimplePing.h"

@interface JWSampleModule : NSObject <RCTBridgeModule, SimplePingDelegate>

@property (nonatomic, strong, readwrite, nullable) SimplePing *pinger;
@property (nonatomic, strong, readwrite, nullable) NSTimer *sendTimer;

@end
