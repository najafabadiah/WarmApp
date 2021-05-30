//
//  AddDelegate.swift
//  Spot
//
//  Created by Pietro Bonazzi on 06/02/2021.
//

import UIKit
import Foundation
import GoogleMaps
import Firebase

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    FirebaseApp.configure()
    GMSServices.provideAPIKey("AIzaSyC_tvjF1jLH47g-oQCKPXL2uAsVYfoHAs0")

    let jsCodeLocation: URL
    jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil)

    let bridge = RCTBridge(bundleURL: jsCodeLocation, moduleProvider: nil, launchOptions: nil)
    #if RCT_DEV
    bridge?.module(for: RCTDevLoadingView.self)
    #endif
    let rootView = RCTRootView(bridge: bridge!, moduleName: "Spot", initialProperties: nil)
    //let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "Spot", initialProperties: nil, launchOptions: launchOptions)
    let rootViewController = UIViewController()
    rootViewController.view = rootView

    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()

    return true
  }



}

