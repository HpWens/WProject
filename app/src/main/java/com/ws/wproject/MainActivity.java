package com.ws.wproject;

import android.content.Intent;
import android.os.Bundle;

import com.meis.base.mei.base.BaseActivity;
import com.meis.base.mei.utils.Eyes;

public class MainActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        int flavors = ((MyApplication) getApplication()).getFlavorsCode();
        if (flavors == 2) {
            setTheme(R.style.AppTheme_ZZT_Launcher);
        } else if (flavors == 1) {
            setTheme(R.style.AppTheme_Launcher);
        }

        super.onCreate(savedInstanceState);
        // setContentView(R.layout.activity_main);

        Eyes.translucentStatusBar(this, true, true);

        postUiThread(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(MainActivity.this, HomeActivity.class);
                startActivity(intent);
                finish();
            }
        }, 1500);

    }

    @Override
    protected void initView() {

    }

    @Override
    protected void initData() {

    }

    @Override
    protected int layoutResId() {
        return 0;
    }
}
