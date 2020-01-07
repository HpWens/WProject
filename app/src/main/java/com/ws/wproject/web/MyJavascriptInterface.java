package com.ws.wproject.web;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;
import android.webkit.JavascriptInterface;

import androidx.fragment.app.FragmentActivity;

import com.tbruyelle.rxpermissions2.RxPermissions;
import com.vondear.rxfeature.tool.RxQRCode;
import com.vondear.rxtool.RxFileTool;
import com.vondear.rxtool.RxImageTool;
import com.vondear.rxtool.RxSPTool;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.util.Date;

import io.reactivex.functions.Consumer;

/**
 * Created by jingbin on 2016/11/17.
 * js通信接口
 */
public class MyJavascriptInterface {

    private Context context;

    private FragmentActivity fragmentActivity;

    private static final String VALUE_TOKEN = "JS_VALUE";

//    public MyJavascriptInterface(Context context) {
//        this.context = context;
//    }

    public MyJavascriptInterface(Context context, FragmentActivity fragmentActivity) {
        this.context = context;
        this.fragmentActivity = fragmentActivity;
    }

    /**
     * 前端代码嵌入js：
     * imageClick 名应和js函数方法名一致
     *
     * @param src 图片的链接
     */
    @JavascriptInterface
    public void imageClick(String src) {
        Log.e("imageClick", "----点击了图片");
        Log.e("src", src);
    }

    /**
     * 前端代码嵌入js
     * 遍历<li>节点
     *
     * @param type    <li>节点下type属性的值
     * @param item_pk item_pk属性的值
     */
    @JavascriptInterface
    public void textClick(String type, String item_pk) {
        if (!TextUtils.isEmpty(type) && !TextUtils.isEmpty(item_pk)) {
            Log.e("textClick", "----点击了文字");
            Log.e("type", type);
            Log.e("item_pk", item_pk);
        }
    }

    @JavascriptInterface
    public void savePhoto(final String fileStream) {
        new RxPermissions(fragmentActivity).request(new String[]{
                Manifest.permission.WRITE_EXTERNAL_STORAGE
                , Manifest.permission.READ_EXTERNAL_STORAGE})
                .subscribe(new Consumer<Boolean>() {
                    @Override
                    public void accept(Boolean aBoolean) throws Exception {
                        if (aBoolean) {
                            Bitmap bitmap = RxQRCode.creatQRCode(fileStream, 600, 600);
                            if (bitmap != null) {
                                String fileName = RxFileTool.getSDCardPath() + "/" + new Date().getTime() + ".png";
                                Bitmap.CompressFormat compressFormat = Bitmap.CompressFormat.PNG;
                                RxImageTool.save(bitmap, fileName, compressFormat);
                                fragmentActivity.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.fromFile(new File(fileName))));
                            }
                        }
                    }
                });
    }

    /**
     * 网页使用的js，方法无参数
     */
    @JavascriptInterface
    public void startFunction() {
        Log.e("startFunction", "----无参");
    }

    /**
     * 网页使用的js，方法有参数，且参数名为data
     *
     * @param data 网页js里的参数名
     */
    @JavascriptInterface
    public void startFunction(String data) {
        Log.e("startFunction", "----有参" + data);
    }

    /**
     * 获取网页源代码
     */
    @JavascriptInterface
    public void showSource(String html) {
        Log.e("showSourceCode", html);
    }

    @JavascriptInterface
    public void saveValue(String value) {
        RxSPTool.putString(context, VALUE_TOKEN, value);
    }

    @JavascriptInterface
    public String getValue(String key) {
        String value = RxSPTool.getString(context, VALUE_TOKEN);
        if (!TextUtils.isEmpty(value)) {
            try {
                JSONObject jsonObject = new JSONObject(value);
                if (jsonObject.has("value")) {
                    return jsonObject.optString("value");
                }
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        return "";
    }
}
