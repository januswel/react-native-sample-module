using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Sample.Module.JWSampleModule
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class JWSampleModuleModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="JWSampleModuleModule"/>.
        /// </summary>
        internal JWSampleModuleModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "JWSampleModule";
            }
        }
    }
}
