package com.ws.wproject;

import com.meis.base.mei.BaseApplication;

public class MyApplication extends BaseApplication {

    private static MyApplication app;

    @Override
    public void onCreate() {
        super.onCreate();
        app = this;
    }

    public static MyApplication getInstance() {
        return app;
    }
}
