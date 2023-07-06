package com.newarchapp

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import org.json.JSONTokener

class NewArchModule(reactContext: ReactApplicationContext?) :
        ReactContextBaseJavaModule(reactContext) {
    private var TAG = "NewArch"
    private var promise: Promise? = null

    // the name that's going to be use in JS file
    override fun getName(): String {
        return "NewArchModule"
    }

    @ReactMethod
    fun mayaCheckout(data: String, promise: Promise) {
        Log.d(TAG, "From ReactNative: $data")
    }
}
