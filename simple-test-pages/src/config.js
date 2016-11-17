System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "target": "es5",
    "module": "commonjs",
    "isolatedModules": false,
    "moduleResolution": "node",
    "jsx": "react"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "src/dependencies-bundle.js": [
      "npm:typescript@2.1.1.js",
      "npm:typescript@2.1.1/lib/typescript.js",
      "npm:source-map-support@0.4.6.js",
      "npm:source-map-support@0.4.6/source-map-support.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:ieee754@1.1.8.js",
      "npm:ieee754@1.1.8/index.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "github:jspm/nodelibs-module@0.1.0.js",
      "github:jspm/nodelibs-module@0.1.0/index.js",
      "github:jspm/nodelibs-fs@0.1.2.js",
      "github:jspm/nodelibs-fs@0.1.2/index.js",
      "github:jspm/nodelibs-path@0.1.0.js",
      "github:jspm/nodelibs-path@0.1.0/index.js",
      "npm:path-browserify@0.0.0.js",
      "npm:path-browserify@0.0.0/index.js",
      "npm:source-map@0.5.6.js",
      "npm:source-map@0.5.6/source-map.js",
      "npm:source-map@0.5.6/lib/source-node.js",
      "npm:source-map@0.5.6/lib/util.js",
      "npm:source-map@0.5.6/lib/source-map-generator.js",
      "npm:source-map@0.5.6/lib/mapping-list.js",
      "npm:source-map@0.5.6/lib/array-set.js",
      "npm:source-map@0.5.6/lib/base64-vlq.js",
      "npm:source-map@0.5.6/lib/base64.js",
      "npm:source-map@0.5.6/lib/source-map-consumer.js",
      "npm:source-map@0.5.6/lib/quick-sort.js",
      "npm:source-map@0.5.6/lib/binary-search.js",
      "github:jspm/nodelibs-crypto@0.1.0.js",
      "github:jspm/nodelibs-crypto@0.1.0/index.js",
      "npm:crypto-browserify@3.11.0.js",
      "npm:crypto-browserify@3.11.0/index.js",
      "npm:public-encrypt@4.0.0.js",
      "npm:public-encrypt@4.0.0/browser.js",
      "npm:public-encrypt@4.0.0/privateDecrypt.js",
      "npm:public-encrypt@4.0.0/withPublic.js",
      "npm:bn.js@4.11.6.js",
      "npm:bn.js@4.11.6/lib/bn.js",
      "npm:create-hash@1.1.2.js",
      "npm:create-hash@1.1.2/browser.js",
      "npm:cipher-base@1.0.3.js",
      "npm:cipher-base@1.0.3/index.js",
      "github:jspm/nodelibs-string_decoder@0.1.0.js",
      "github:jspm/nodelibs-string_decoder@0.1.0/index.js",
      "npm:string_decoder@0.10.31.js",
      "npm:string_decoder@0.10.31/index.js",
      "npm:inherits@2.0.1.js",
      "npm:inherits@2.0.1/inherits_browser.js",
      "github:jspm/nodelibs-stream@0.1.0.js",
      "github:jspm/nodelibs-stream@0.1.0/index.js",
      "npm:stream-browserify@1.0.0.js",
      "npm:stream-browserify@1.0.0/index.js",
      "npm:readable-stream@1.1.14/passthrough.js",
      "npm:readable-stream@1.1.14/lib/_stream_passthrough.js",
      "npm:core-util-is@1.0.2.js",
      "npm:core-util-is@1.0.2/lib/util.js",
      "npm:readable-stream@1.1.14/lib/_stream_transform.js",
      "npm:readable-stream@1.1.14/lib/_stream_duplex.js",
      "npm:readable-stream@1.1.14/lib/_stream_writable.js",
      "npm:readable-stream@1.1.14/lib/_stream_readable.js",
      "github:jspm/nodelibs-events@0.1.1.js",
      "github:jspm/nodelibs-events@0.1.1/index.js",
      "npm:events@1.0.2.js",
      "npm:events@1.0.2/events.js",
      "npm:isarray@0.0.1.js",
      "npm:isarray@0.0.1/index.js",
      "npm:readable-stream@1.1.14/transform.js",
      "npm:readable-stream@1.1.14/duplex.js",
      "npm:readable-stream@1.1.14/writable.js",
      "npm:readable-stream@1.1.14/readable.js",
      "npm:sha.js@2.4.8.js",
      "npm:sha.js@2.4.8/index.js",
      "npm:sha.js@2.4.8/sha512.js",
      "npm:sha.js@2.4.8/hash.js",
      "npm:sha.js@2.4.8/sha384.js",
      "npm:sha.js@2.4.8/sha256.js",
      "npm:sha.js@2.4.8/sha224.js",
      "npm:sha.js@2.4.8/sha1.js",
      "npm:sha.js@2.4.8/sha.js",
      "npm:ripemd160@1.0.1.js",
      "npm:ripemd160@1.0.1/lib/ripemd160.js",
      "npm:create-hash@1.1.2/md5.js",
      "npm:create-hash@1.1.2/helpers.js",
      "npm:browserify-rsa@4.0.1.js",
      "npm:browserify-rsa@4.0.1/index.js",
      "npm:randombytes@2.0.3.js",
      "npm:randombytes@2.0.3/browser.js",
      "npm:public-encrypt@4.0.0/xor.js",
      "npm:public-encrypt@4.0.0/mgf.js",
      "npm:parse-asn1@5.0.0.js",
      "npm:parse-asn1@5.0.0/index.js",
      "npm:pbkdf2@3.0.9.js",
      "npm:pbkdf2@3.0.9/browser.js",
      "npm:pbkdf2@3.0.9/precondition.js",
      "npm:create-hmac@1.1.4.js",
      "npm:create-hmac@1.1.4/browser.js",
      "npm:browserify-aes@1.0.6.js",
      "npm:browserify-aes@1.0.6/browser.js",
      "npm:browserify-aes@1.0.6/modes.js",
      "npm:browserify-aes@1.0.6/decrypter.js",
      "npm:browserify-aes@1.0.6/modes/ctr.js",
      "npm:buffer-xor@1.0.3.js",
      "npm:buffer-xor@1.0.3/index.js",
      "npm:browserify-aes@1.0.6/modes/ofb.js",
      "npm:browserify-aes@1.0.6/modes/cfb1.js",
      "npm:browserify-aes@1.0.6/modes/cfb8.js",
      "npm:browserify-aes@1.0.6/modes/cfb.js",
      "npm:browserify-aes@1.0.6/modes/cbc.js",
      "npm:browserify-aes@1.0.6/modes/ecb.js",
      "npm:evp_bytestokey@1.0.0.js",
      "npm:evp_bytestokey@1.0.0/index.js",
      "npm:browserify-aes@1.0.6/authCipher.js",
      "npm:browserify-aes@1.0.6/ghash.js",
      "npm:browserify-aes@1.0.6/aes.js",
      "npm:browserify-aes@1.0.6/streamCipher.js",
      "npm:browserify-aes@1.0.6/encrypter.js",
      "npm:parse-asn1@5.0.0/fixProc.js",
      "npm:parse-asn1@5.0.0/aesid.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:parse-asn1@5.0.0/asn1.js",
      "npm:asn1.js@4.9.0.js",
      "npm:asn1.js@4.9.0/lib/asn1.js",
      "npm:asn1.js@4.9.0/lib/asn1/encoders/index.js",
      "npm:asn1.js@4.9.0/lib/asn1/encoders/pem.js",
      "npm:asn1.js@4.9.0/lib/asn1/encoders/der.js",
      "npm:asn1.js@4.9.0/lib/asn1/decoders/index.js",
      "npm:asn1.js@4.9.0/lib/asn1/decoders/pem.js",
      "npm:asn1.js@4.9.0/lib/asn1/decoders/der.js",
      "npm:asn1.js@4.9.0/lib/asn1/constants/index.js",
      "npm:asn1.js@4.9.0/lib/asn1/constants/der.js",
      "npm:asn1.js@4.9.0/lib/asn1/base/index.js",
      "npm:asn1.js@4.9.0/lib/asn1/base/node.js",
      "npm:minimalistic-assert@1.0.0.js",
      "npm:minimalistic-assert@1.0.0/index.js",
      "npm:asn1.js@4.9.0/lib/asn1/base/buffer.js",
      "npm:asn1.js@4.9.0/lib/asn1/base/reporter.js",
      "npm:asn1.js@4.9.0/lib/asn1/api.js",
      "github:jspm/nodelibs-vm@0.1.0.js",
      "github:jspm/nodelibs-vm@0.1.0/index.js",
      "npm:vm-browserify@0.0.4.js",
      "npm:vm-browserify@0.0.4/index.js",
      "npm:indexof@0.0.1.js",
      "npm:indexof@0.0.1/index.js",
      "npm:public-encrypt@4.0.0/publicEncrypt.js",
      "npm:create-ecdh@4.0.0.js",
      "npm:create-ecdh@4.0.0/browser.js",
      "npm:elliptic@6.3.2.js",
      "npm:elliptic@6.3.2/lib/elliptic.js",
      "npm:elliptic@6.3.2/lib/elliptic/eddsa/index.js",
      "npm:elliptic@6.3.2/lib/elliptic/eddsa/signature.js",
      "npm:elliptic@6.3.2/lib/elliptic/eddsa/key.js",
      "npm:hash.js@1.0.3.js",
      "npm:hash.js@1.0.3/lib/hash.js",
      "npm:hash.js@1.0.3/lib/hash/hmac.js",
      "npm:hash.js@1.0.3/lib/hash/ripemd.js",
      "npm:hash.js@1.0.3/lib/hash/sha.js",
      "npm:hash.js@1.0.3/lib/hash/common.js",
      "npm:hash.js@1.0.3/lib/hash/utils.js",
      "npm:elliptic@6.3.2/lib/elliptic/ec/index.js",
      "npm:elliptic@6.3.2/lib/elliptic/ec/signature.js",
      "npm:elliptic@6.3.2/lib/elliptic/ec/key.js",
      "npm:elliptic@6.3.2/lib/elliptic/curves.js",
      "npm:elliptic@6.3.2/lib/elliptic/precomputed/secp256k1.js",
      "npm:elliptic@6.3.2/lib/elliptic/curve/index.js",
      "npm:elliptic@6.3.2/lib/elliptic/curve/edwards.js",
      "npm:elliptic@6.3.2/lib/elliptic/curve/mont.js",
      "npm:elliptic@6.3.2/lib/elliptic/curve/short.js",
      "npm:elliptic@6.3.2/lib/elliptic/curve/base.js",
      "npm:elliptic@6.3.2/lib/elliptic/hmac-drbg.js",
      "npm:brorand@1.0.6.js",
      "npm:brorand@1.0.6/index.js",
      "npm:elliptic@6.3.2/lib/elliptic/utils.js",
      "npm:elliptic@6.3.2/package.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:browserify-sign@4.0.0.js",
      "npm:browserify-sign@4.0.0/browser.js",
      "npm:browserify-sign@4.0.0/verify.js",
      "npm:browserify-sign@4.0.0/curves.js",
      "npm:browserify-sign@4.0.0/sign.js",
      "npm:browserify-sign@4.0.0/algos.js",
      "npm:diffie-hellman@5.0.2.js",
      "npm:diffie-hellman@5.0.2/browser.js",
      "npm:diffie-hellman@5.0.2/lib/dh.js",
      "npm:diffie-hellman@5.0.2/lib/generatePrime.js",
      "npm:miller-rabin@4.0.0.js",
      "npm:miller-rabin@4.0.0/lib/mr.js",
      "npm:diffie-hellman@5.0.2/lib/primes.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:browserify-cipher@1.0.0.js",
      "npm:browserify-cipher@1.0.0/browser.js",
      "npm:browserify-des@1.0.0/modes.js",
      "npm:browserify-des@1.0.0.js",
      "npm:browserify-des@1.0.0/index.js",
      "npm:des.js@1.0.0.js",
      "npm:des.js@1.0.0/lib/des.js",
      "npm:des.js@1.0.0/lib/des/ede.js",
      "npm:des.js@1.0.0/lib/des/cbc.js",
      "npm:des.js@1.0.0/lib/des/des.js",
      "npm:des.js@1.0.0/lib/des/cipher.js",
      "npm:des.js@1.0.0/lib/des/utils.js",
      "github:jspm/nodelibs-os@0.1.0.js",
      "github:jspm/nodelibs-os@0.1.0/index.js",
      "npm:os-browserify@0.1.2.js",
      "npm:os-browserify@0.1.2/browser.js",
      "npm:react@15.3.2.js",
      "npm:react@15.3.2/react.js",
      "npm:react@15.3.2/lib/React.js",
      "npm:react@15.3.2/lib/ReactElementValidator.js",
      "npm:fbjs@0.8.6/lib/warning.js",
      "npm:fbjs@0.8.6/lib/emptyFunction.js",
      "npm:react@15.3.2/lib/getIteratorFn.js",
      "npm:react@15.3.2/lib/canDefineProperty.js",
      "npm:react@15.3.2/lib/checkReactTypeSpec.js",
      "npm:react@15.3.2/lib/ReactComponentTreeHook.js",
      "npm:fbjs@0.8.6/lib/invariant.js",
      "npm:react@15.3.2/lib/ReactCurrentOwner.js",
      "npm:react@15.3.2/lib/reactProdInvariant.js",
      "npm:react@15.3.2/lib/ReactPropTypesSecret.js",
      "npm:react@15.3.2/lib/ReactPropTypeLocationNames.js",
      "npm:react@15.3.2/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.8.6/lib/keyMirror.js",
      "npm:react@15.3.2/lib/ReactElement.js",
      "npm:object-assign@4.1.0.js",
      "npm:object-assign@4.1.0/index.js",
      "npm:react@15.3.2/lib/onlyChild.js",
      "npm:react@15.3.2/lib/ReactVersion.js",
      "npm:react@15.3.2/lib/ReactPropTypes.js",
      "npm:react@15.3.2/lib/ReactDOMFactories.js",
      "npm:react@15.3.2/lib/ReactClass.js",
      "npm:fbjs@0.8.6/lib/keyOf.js",
      "npm:fbjs@0.8.6/lib/emptyObject.js",
      "npm:react@15.3.2/lib/ReactNoopUpdateQueue.js",
      "npm:react@15.3.2/lib/ReactComponent.js",
      "npm:react@15.3.2/lib/ReactPureComponent.js",
      "npm:react@15.3.2/lib/ReactChildren.js",
      "npm:react@15.3.2/lib/traverseAllChildren.js",
      "npm:react@15.3.2/lib/KeyEscapeUtils.js",
      "npm:react@15.3.2/lib/PooledClass.js",
      "npm:react-dom@15.3.2.js",
      "npm:react-dom@15.3.2/index.js",
      "npm:react@15.3.2/lib/ReactDOM.js",
      "npm:react@15.3.2/lib/ReactDOMNullInputValuePropHook.js",
      "npm:react@15.3.2/lib/ReactDOMUnknownPropertyHook.js",
      "npm:react@15.3.2/lib/EventPluginRegistry.js",
      "npm:react@15.3.2/lib/DOMProperty.js",
      "npm:react@15.3.2/lib/ReactInstrumentation.js",
      "npm:react@15.3.2/lib/ReactDebugTool.js",
      "npm:fbjs@0.8.6/lib/performanceNow.js",
      "npm:fbjs@0.8.6/lib/performance.js",
      "npm:fbjs@0.8.6/lib/ExecutionEnvironment.js",
      "npm:react@15.3.2/lib/ReactChildrenMutationWarningHook.js",
      "npm:react@15.3.2/lib/ReactHostOperationHistoryHook.js",
      "npm:react@15.3.2/lib/ReactInvalidSetStateWarningHook.js",
      "npm:react@15.3.2/lib/renderSubtreeIntoContainer.js",
      "npm:react@15.3.2/lib/ReactMount.js",
      "npm:react@15.3.2/lib/shouldUpdateReactComponent.js",
      "npm:react@15.3.2/lib/setInnerHTML.js",
      "npm:react@15.3.2/lib/createMicrosoftUnsafeLocalFunction.js",
      "npm:react@15.3.2/lib/DOMNamespaces.js",
      "npm:react@15.3.2/lib/instantiateReactComponent.js",
      "npm:react@15.3.2/lib/ReactHostComponent.js",
      "npm:react@15.3.2/lib/ReactEmptyComponent.js",
      "npm:react@15.3.2/lib/ReactCompositeComponent.js",
      "npm:fbjs@0.8.6/lib/shallowEqual.js",
      "npm:react@15.3.2/lib/ReactReconciler.js",
      "npm:react@15.3.2/lib/ReactRef.js",
      "npm:react@15.3.2/lib/ReactOwner.js",
      "npm:react@15.3.2/lib/ReactNodeTypes.js",
      "npm:react@15.3.2/lib/ReactInstanceMap.js",
      "npm:react@15.3.2/lib/ReactErrorUtils.js",
      "npm:react@15.3.2/lib/ReactComponentEnvironment.js",
      "npm:react@15.3.2/lib/ReactUpdates.js",
      "npm:react@15.3.2/lib/Transaction.js",
      "npm:react@15.3.2/lib/ReactFeatureFlags.js",
      "npm:react@15.3.2/lib/CallbackQueue.js",
      "npm:react@15.3.2/lib/ReactUpdateQueue.js",
      "npm:react@15.3.2/lib/ReactMarkupChecksum.js",
      "npm:react@15.3.2/lib/adler32.js",
      "npm:react@15.3.2/lib/ReactDOMFeatureFlags.js",
      "npm:react@15.3.2/lib/ReactDOMContainerInfo.js",
      "npm:react@15.3.2/lib/validateDOMNesting.js",
      "npm:react@15.3.2/lib/ReactDOMComponentTree.js",
      "npm:react@15.3.2/lib/ReactDOMComponentFlags.js",
      "npm:react@15.3.2/lib/ReactBrowserEventEmitter.js",
      "npm:react@15.3.2/lib/isEventSupported.js",
      "npm:react@15.3.2/lib/getVendorPrefixedEventName.js",
      "npm:react@15.3.2/lib/ViewportMetrics.js",
      "npm:react@15.3.2/lib/ReactEventEmitterMixin.js",
      "npm:react@15.3.2/lib/EventPluginHub.js",
      "npm:react@15.3.2/lib/forEachAccumulated.js",
      "npm:react@15.3.2/lib/accumulateInto.js",
      "npm:react@15.3.2/lib/EventPluginUtils.js",
      "npm:react@15.3.2/lib/EventConstants.js",
      "npm:react@15.3.2/lib/DOMLazyTree.js",
      "npm:react@15.3.2/lib/setTextContent.js",
      "npm:react@15.3.2/lib/escapeTextContentForBrowser.js",
      "npm:react@15.3.2/lib/getHostComponentFromComposite.js",
      "npm:react@15.3.2/lib/findDOMNode.js",
      "npm:react@15.3.2/lib/ReactDefaultInjection.js",
      "npm:react@15.3.2/lib/SimpleEventPlugin.js",
      "npm:react@15.3.2/lib/getEventCharCode.js",
      "npm:react@15.3.2/lib/SyntheticWheelEvent.js",
      "npm:react@15.3.2/lib/SyntheticMouseEvent.js",
      "npm:react@15.3.2/lib/getEventModifierState.js",
      "npm:react@15.3.2/lib/SyntheticUIEvent.js",
      "npm:react@15.3.2/lib/getEventTarget.js",
      "npm:react@15.3.2/lib/SyntheticEvent.js",
      "npm:react@15.3.2/lib/SyntheticTransitionEvent.js",
      "npm:react@15.3.2/lib/SyntheticTouchEvent.js",
      "npm:react@15.3.2/lib/SyntheticDragEvent.js",
      "npm:react@15.3.2/lib/SyntheticKeyboardEvent.js",
      "npm:react@15.3.2/lib/getEventKey.js",
      "npm:react@15.3.2/lib/SyntheticFocusEvent.js",
      "npm:react@15.3.2/lib/SyntheticClipboardEvent.js",
      "npm:react@15.3.2/lib/SyntheticAnimationEvent.js",
      "npm:react@15.3.2/lib/EventPropagators.js",
      "npm:fbjs@0.8.6/lib/EventListener.js",
      "npm:react@15.3.2/lib/SelectEventPlugin.js",
      "npm:react@15.3.2/lib/isTextInputElement.js",
      "npm:fbjs@0.8.6/lib/getActiveElement.js",
      "npm:react@15.3.2/lib/ReactInputSelection.js",
      "npm:fbjs@0.8.6/lib/focusNode.js",
      "npm:fbjs@0.8.6/lib/containsNode.js",
      "npm:fbjs@0.8.6/lib/isTextNode.js",
      "npm:fbjs@0.8.6/lib/isNode.js",
      "npm:react@15.3.2/lib/ReactDOMSelection.js",
      "npm:react@15.3.2/lib/getTextContentAccessor.js",
      "npm:react@15.3.2/lib/getNodeForCharacterOffset.js",
      "npm:react@15.3.2/lib/SVGDOMPropertyConfig.js",
      "npm:react@15.3.2/lib/ReactReconcileTransaction.js",
      "npm:react@15.3.2/lib/ReactInjection.js",
      "npm:react@15.3.2/lib/ReactEventListener.js",
      "npm:fbjs@0.8.6/lib/getUnboundedScrollPosition.js",
      "npm:react@15.3.2/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@15.3.2/lib/ReactDOMTextComponent.js",
      "npm:react@15.3.2/lib/DOMChildrenOperations.js",
      "npm:react@15.3.2/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@15.3.2/lib/Danger.js",
      "npm:fbjs@0.8.6/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.8.6/lib/getMarkupWrap.js",
      "npm:fbjs@0.8.6/lib/createArrayFromMixed.js",
      "npm:react@15.3.2/lib/ReactDOMTreeTraversal.js",
      "npm:react@15.3.2/lib/ReactDOMEmptyComponent.js",
      "npm:react@15.3.2/lib/ReactDOMComponent.js",
      "npm:react@15.3.2/lib/ReactServerRenderingTransaction.js",
      "npm:react@15.3.2/lib/ReactServerUpdateQueue.js",
      "npm:react@15.3.2/lib/ReactMultiChild.js",
      "npm:react@15.3.2/lib/flattenChildren.js",
      "npm:react@15.3.2/lib/ReactChildReconciler.js",
      "npm:react@15.3.2/lib/ReactDOMTextarea.js",
      "npm:react@15.3.2/lib/LinkedValueUtils.js",
      "npm:react@15.3.2/lib/DisabledInputUtils.js",
      "npm:react@15.3.2/lib/ReactDOMSelect.js",
      "npm:react@15.3.2/lib/ReactDOMOption.js",
      "npm:react@15.3.2/lib/ReactDOMInput.js",
      "npm:react@15.3.2/lib/DOMPropertyOperations.js",
      "npm:react@15.3.2/lib/quoteAttributeValueForBrowser.js",
      "npm:react@15.3.2/lib/ReactDOMButton.js",
      "npm:react@15.3.2/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.8.6/lib/memoizeStringOnly.js",
      "npm:fbjs@0.8.6/lib/hyphenateStyleName.js",
      "npm:fbjs@0.8.6/lib/hyphenate.js",
      "npm:react@15.3.2/lib/dangerousStyleValue.js",
      "npm:react@15.3.2/lib/CSSProperty.js",
      "npm:fbjs@0.8.6/lib/camelizeStyleName.js",
      "npm:fbjs@0.8.6/lib/camelize.js",
      "npm:react@15.3.2/lib/AutoFocusUtils.js",
      "npm:react@15.3.2/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@15.3.2/lib/ReactDOMIDOperations.js",
      "npm:react@15.3.2/lib/HTMLDOMPropertyConfig.js",
      "npm:react@15.3.2/lib/EnterLeaveEventPlugin.js",
      "npm:react@15.3.2/lib/DefaultEventPluginOrder.js",
      "npm:react@15.3.2/lib/ChangeEventPlugin.js",
      "npm:react@15.3.2/lib/BeforeInputEventPlugin.js",
      "npm:react@15.3.2/lib/SyntheticInputEvent.js",
      "npm:react@15.3.2/lib/SyntheticCompositionEvent.js",
      "npm:react@15.3.2/lib/FallbackCompositionState.js",
      "npm:qs@6.3.0.js",
      "npm:qs@6.3.0/lib/index.js",
      "npm:qs@6.3.0/lib/formats.js",
      "npm:qs@6.3.0/lib/parse.js",
      "npm:qs@6.3.0/lib/utils.js",
      "npm:qs@6.3.0/lib/stringify.js"
    ]
  },
  trace: true,

  packages: {
    "tester": {
      "main": "tester",
      "defaultExtension": "tsx",
      "meta": {}
    },
    "package": {
      "main": "tester",
      "defaultExtension": "ts",
      "meta": {}
    }
  },

  map: {
    "fast-sha256": "npm:fast-sha256@1.0.0",
    "qs": "npm:qs@6.3.0",
    "react": "npm:react@15.3.2",
    "react-dom": "npm:react-dom@15.3.2",
    "typescript": "npm:typescript@2.1.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.2.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.3.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.8.6": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.12"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.3",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.0"
    },
    "npm:loose-envify@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:node-fetch@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.9.0",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@15.3.2": {
      "react": "npm:react@15.3.2"
    },
    "npm:react@15.3.2": {
      "fbjs": "npm:fbjs@0.8.6",
      "loose-envify": "npm:loose-envify@1.3.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.4.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.9"
    },
    "npm:typescript@2.1.1": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "source-map-support": "npm:source-map-support@0.4.6"
    },
    "npm:ua-parser-js@0.7.12": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
