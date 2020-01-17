package com.ws.wproject;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;

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

    public int getFlavorsCode() {
        int code = 1;
        ApplicationInfo appInfo = null;
        try {
            appInfo = getPackageManager().getApplicationInfo(getPackageName(), PackageManager.GET_META_DATA);
            code = appInfo.metaData.getInt("flavors_code");
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return code;
    }
}
