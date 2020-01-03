package com.meis.base.mei.base;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.LinearGradient;
import android.graphics.Shader;
import android.net.Uri;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.MotionEvent;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.DrawableRes;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.meis.base.R;
import com.meis.base.mei.MeiCompatActivity;
import com.meis.base.mei.dialog.MeiCompatDialog;
import com.meis.base.mei.utils.Eyes;

import org.greenrobot.eventbus.EventBus;

import java.util.List;

import me.yokeyword.fragmentation.ExtraTransaction;
import me.yokeyword.fragmentation.ISupportActivity;
import me.yokeyword.fragmentation.ISupportFragment;
import me.yokeyword.fragmentation.SupportActivityDelegate;
import me.yokeyword.fragmentation.SupportHelper;
import me.yokeyword.fragmentation.anim.FragmentAnimator;


/**
 * desc:
 * author: ws
 * date: 2018/4/19.
 */

public abstract class BaseActivity extends MeiCompatActivity implements ISupportActivity {

    final SupportActivityDelegate mDelegate = new SupportActivityDelegate(this);

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mDelegate.onCreate(savedInstanceState);
        setContentView(layoutResId());
        if (isRegisterEventBus()) {
            EventBus.getDefault().register(this);
        }

        initView();
        initData();
    }

    @Override
    protected void onStart() {
        super.onStart();
    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    public boolean isRegisterEventBus() {
        return false;
    }

    @Override
    protected void onPostCreate(@Nullable Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);
        mDelegate.onPostCreate(savedInstanceState);
    }

    @Override
    public SupportActivityDelegate getSupportDelegate() {
        return mDelegate;
    }

    /**
     * Perform some extra transactions.
     * 额外的事务：自定义Tag，添加SharedElement动画，操作非回退栈Fragment
     */
    @Override
    public ExtraTransaction extraTransaction() {
        return mDelegate.extraTransaction();
    }

    /**
     * 获取设置的全局动画 copy
     *
     * @return FragmentAnimator
     */
    @Override
    public FragmentAnimator getFragmentAnimator() {
        return mDelegate.getFragmentAnimator();
    }

    /**
     * Set all fragments animation.
     * 设置Fragment内的全局动画
     */
    @Override
    public void setFragmentAnimator(FragmentAnimator fragmentAnimator) {
        mDelegate.setFragmentAnimator(fragmentAnimator);
    }

    /**
     * Set all fragments animation.
     * 构建Fragment转场动画
     * <p/>
     * 如果是在Activity内实现,则构建的是Activity内所有Fragment的转场动画,
     * 如果是在Fragment内实现,则构建的是该Fragment的转场动画,此时优先级 > Activity的onCreateFragmentAnimator()
     *
     * @return FragmentAnimator对象
     */
    @Override
    public FragmentAnimator onCreateFragmentAnimator() {
        return mDelegate.onCreateFragmentAnimator();
    }

    @Override
    public void post(Runnable runnable) {
        mDelegate.post(runnable);
    }

    /**
     * 该方法回调时机为,Activity回退栈内Fragment的数量 小于等于1 时,默认finish Activity
     * 请尽量复写该方法,避免复写onBackPress(),以保证SupportFragment内的onBackPressedSupport()回退事件正常执行
     */
    @Override
    public void onBackPressedSupport() {
        mDelegate.onBackPressedSupport();
    }

    /**
     * Note： return mDelegate.dispatchTouchEvent(ev) || super.dispatchTouchEvent(ev);
     */
    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        return mDelegate.dispatchTouchEvent(ev) || super.dispatchTouchEvent(ev);
    }

    /**
     * 不建议复写该方法,请使用 {@link #onBackPressedSupport} 代替
     */
    @Override
    final public void onBackPressed() {
        mDelegate.onBackPressed();
    }

    @Override
    protected void onDestroy() {

        mDelegate.onDestroy();
        super.onDestroy();
        if (isRegisterEventBus()) {
            EventBus.getDefault().unregister(this);
        }
    }

    /**
     * 加载根Fragment, 即Activity内的第一个Fragment 或 Fragment内的第一个子Fragment
     *
     * @param containerId 容器id
     * @param toFragment  目标Fragment
     */
    public void loadRootFragment(int containerId, @NonNull ISupportFragment toFragment) {
        mDelegate.loadRootFragment(containerId, toFragment);
    }

    /**
     * @param toFragment 添加到 android.R.id.content
     */
    public void loadRootFragment(@NonNull ISupportFragment toFragment) {
        mDelegate.loadRootFragment(android.R.id.content, toFragment);
    }

    public void loadRootFragment(int containerId, ISupportFragment toFragment, boolean
            addToBackStack, boolean allowAnimation) {
        mDelegate.loadRootFragment(containerId, toFragment, addToBackStack, allowAnimation);
    }

    /**
     * 加载多个同级根Fragment,类似Wechat, QQ主页的场景
     */
    public void loadMultipleRootFragment(int containerId, int showPosition, ISupportFragment...
            toFragments) {
        mDelegate.loadMultipleRootFragment(containerId, showPosition, toFragments);
    }

    /**
     * show一个Fragment,hide其他同栈所有Fragment
     * 使用该方法时，要确保同级栈内无多余的Fragment,(只有通过loadMultipleRootFragment()载入的Fragment)
     * <p>
     * 建议使用更明确的{@link #showHideFragment(ISupportFragment, ISupportFragment)}
     *
     * @param showFragment 需要show的Fragment
     */
    public void showHideFragment(ISupportFragment showFragment) {
        mDelegate.showHideFragment(showFragment);
    }

    /**
     * show一个Fragment,hide一个Fragment ; 主要用于类似微信主页那种 切换tab的情况
     */
    public void showHideFragment(ISupportFragment showFragment, ISupportFragment hideFragment) {
        mDelegate.showHideFragment(showFragment, hideFragment);
    }

    /**
     * 同 Activity 的 startActivity
     * <p>
     * It is recommended to use {@link BaseActivity# start(ISupportFragment)}.
     */
    public void start(ISupportFragment toFragment) {
        mDelegate.start(toFragment);
    }

    /**
     * It is recommended to use {@link BaseActivity# start(ISupportFragment, int)}.
     *
     * @param launchMode Similar to Activity's LaunchMode.
     */
    public void start(ISupportFragment toFragment, @ISupportFragment.LaunchMode int launchMode) {
        mDelegate.start(toFragment, launchMode);
    }

    /**
     * It is recommended to use {@link BaseActivity# startForResult(ISupportFragment, int)}.
     * Launch an fragment for which you would like a result when it poped.
     */
    public void startForResult(ISupportFragment toFragment, int requestCode) {
        mDelegate.startForResult(toFragment, requestCode);
    }

    /**
     * It is recommended to use {@link BaseActivity# startWithPop(ISupportFragment)}.
     * Start the target Fragment and pop itself
     */
    public void startWithPop(ISupportFragment toFragment) {
        mDelegate.startWithPop(toFragment);
    }

    /**
     * It is recommended to use
     * {@link BaseActivity# startWithPopTo(ISupportFragment, Class, boolean)}.
     *
     * @see #popTo(Class, boolean)
     * +
     * @see #start(ISupportFragment)
     */
    public void startWithPopTo(ISupportFragment toFragment, Class<?> targetFragmentClass, boolean
            includeTargetFragment) {
        mDelegate.startWithPopTo(toFragment, targetFragmentClass, includeTargetFragment);
    }

    /**
     * It is recommended to use {@link BaseActivity# replaceFragment(ISupportFragment, boolean)}.
     */
    public void replaceFragment(ISupportFragment toFragment, boolean addToBackStack) {
        mDelegate.replaceFragment(toFragment, addToBackStack);
    }

    /**
     * Pop the fragment.
     */
    public void pop() {
        mDelegate.pop();
    }

    /**
     * Pop the last fragment transition from the manager's fragment
     * back stack.
     * <p>
     * 出栈到目标fragment
     *
     * @param targetFragmentClass   目标fragment
     * @param includeTargetFragment 是否包含该fragment
     */
    public void popTo(Class<?> targetFragmentClass, boolean includeTargetFragment) {
        mDelegate.popTo(targetFragmentClass, includeTargetFragment);
    }

    /**
     * If you want to begin another FragmentTransaction immediately after popTo(), use this method.
     * 如果你想在出栈后, 立刻进行FragmentTransaction操作，请使用该方法
     */
    public void popTo(Class<?> targetFragmentClass, boolean includeTargetFragment, Runnable
            afterPopTransactionRunnable) {
        mDelegate.popTo(targetFragmentClass, includeTargetFragment, afterPopTransactionRunnable);
    }

    public void popTo(Class<?> targetFragmentClass, boolean includeTargetFragment, Runnable
            afterPopTransactionRunnable, int popAnim) {
        mDelegate.popTo(targetFragmentClass, includeTargetFragment, afterPopTransactionRunnable,
                popAnim);
    }

    /**
     * 当Fragment根布局 没有 设定background属性时,
     * Fragmentation默认使用Theme的android:windowbackground作为Fragment的背景,
     * 可以通过该方法改变其内所有Fragment的默认背景。
     */
    public void setDefaultFragmentBackground(@DrawableRes int backgroundRes) {
        mDelegate.setDefaultFragmentBackground(backgroundRes);
    }

    /**
     * 得到位于栈顶Fragment
     */
    public ISupportFragment getTopFragment() {
        return SupportHelper.getTopFragment(getSupportFragmentManager());
    }

    /**
     * 获取栈内的fragment对象
     */
    public <T extends ISupportFragment> T findFragment(Class<T> fragmentClass) {
        return SupportHelper.findFragment(getSupportFragmentManager(), fragmentClass);
    }

    /**
     * @param baseDialog
     */
    public void showDialog(MeiCompatDialog baseDialog) {
        getSupportFragmentManager()
                .beginTransaction()
                .add(baseDialog, "dialog_" + baseDialog.getClass().getSimpleName())
                .commitAllowingStateLoss();
    }

    public void setTextViewGradient(TextView textView, int startColor, int endColor) {
        LinearGradient mLinearGradient = new LinearGradient(0, 0, 0, textView.getPaint().getTextSize(),
                startColor, endColor, Shader.TileMode.CLAMP);
        textView.getPaint().setShader(mLinearGradient);
        textView.invalidate();
    }

    public BaseActivity setToolBarCenterTitle(String title) {
        View centerTitle = getToolbarView().findViewById(R.id.tv_center_title);
        if (null != centerTitle && centerTitle instanceof TextView) {
            centerTitle.setVisibility(View.VISIBLE);
            ((TextView) centerTitle).setText(title);
        }
        return this;
    }

    public BaseActivity setLeftBackListener(View.OnClickListener listener) {
        View ivBack = getToolbarView().findViewById(R.id.iv_back);
        if (null != ivBack) {
            ivBack.setVisibility(View.VISIBLE);
            ivBack.setOnClickListener(listener);
        }
        return this;
    }

    public BaseActivity setRightMoreRes(int res) {
        ImageView ivMore = getToolbarView().findViewById(R.id.iv_right_more);
        if (null != ivMore) {
            ivMore.setVisibility(View.VISIBLE);
            ivMore.setImageResource(res);
        }
        return this;
    }

    public BaseActivity setRightMoreListener(View.OnClickListener listener) {
        View more = getToolbarView().findViewById(R.id.iv_right_more);
        if (null != more) {
            more.setVisibility(View.VISIBLE);
            more.setOnClickListener(listener);
        }
        return this;
    }

    public void setRightTextListener(View.OnClickListener listener) {
        setRightTextListener(listener, null);
    }

    public void setRightTextListener(View.OnClickListener listener, String text) {
        View tvRight = getToolbarView().findViewById(R.id.tv_right);
        if (null != tvRight) {
            tvRight.setVisibility(View.VISIBLE);
            tvRight.setOnClickListener(listener);
        }
        if (null != text && tvRight != null && tvRight instanceof TextView) {
            ((TextView) tvRight).setText(text);
        }
    }

    public TextView getToolbarRightTextView() {
        return getToolbarView().findViewById(R.id.tv_right);
    }

    public void autoFillToolBarLeftIcon() {
        getToolbarView().setNavigationIcon(R.mipmap.ic_white_back);
        getToolbarView().setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }

    public Intent getAppDetailSettingIntent(Context context) {
        Intent localIntent = new Intent();
        localIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        localIntent.setAction("android.settings.APPLICATION_DETAILS_SETTINGS");
        localIntent.setData(Uri.fromParts("package", context.getPackageName(), null));
        return localIntent;
    }

    public void showDarkMode() {
        showDark();
        if (!isFullScreen) {
            Eyes.setStatusBarColor(this, Color.parseColor("#4f000000"), true);
        }
    }

    public void showLightMode() {
        hideDark();
        if (!isFullScreen) {
            Eyes.setStatusBarColor(this, Color.parseColor("#ffffff"), true);
        }
    }

    public void removeFragment(Class fragmentClss) {
        Fragment fragment = getSupportFragmentManager().findFragmentByTag(fragmentClss.getName());
        if (fragment != null) {
            getSupportFragmentManager().beginTransaction().remove(fragment).commitAllowingStateLoss();
        }
    }

    public void hideFragment(int fragmentId) {
        Fragment fragment = getSupportFragmentManager().findFragmentById(fragmentId);
        if (fragment != null) {
            hideFragment(fragment);
        }
    }

    public void hideFragment(Fragment fragment) {
        if (fragment.isVisible()) {
            getSupportFragmentManager().beginTransaction()
                    .hide(fragment).commitAllowingStateLoss();
        }
    }

    public void showFragment(int container, Fragment fragment) {
        showFragment(container, fragment, false);
    }

    public void showFragment(int container, Fragment fragment, boolean hideOther) {
        // if (!fragment.isAdded()) return;
        if (fragment.isAdded()) {
            getSupportFragmentManager().beginTransaction()
                    .show(fragment).commitAllowingStateLoss();
        } else {
            getSupportFragmentManager().beginTransaction()
                    .add(container, fragment, fragment.getClass().getName()).commitAllowingStateLoss();
        }
        if (hideOther) {
            @SuppressLint("RestrictedApi")
            List<Fragment> fragmentList = getSupportFragmentManager().getFragments();
            if (fragmentList == null) return;
            for (int i = fragmentList.size() - 1; i >= 0; i--) {
                Fragment frag = fragmentList.get(i);
                if (frag != null && !frag.getClass().getName().equals(fragment.getClass().getName())) {
                    Object obj = frag.getTag();
                    if (obj == null || !obj.toString().equals("publish"))
                        hideFragment(frag);
                }
            }
        }
    }

    public boolean isAddedFragment(String name) {
        @SuppressLint("RestrictedApi")
        List<Fragment> fragmentList = getSupportFragmentManager().getFragments();
        if (fragmentList == null || fragmentList.isEmpty()) return false;
        for (int i = fragmentList.size() - 1; i >= 0; i--) {
            if (fragmentList.get(i) != null && fragmentList.get(i).getClass() != null && fragmentList.get(i).getClass
                    ().getSimpleName().equals(name)) {
                return true;
            }
        }
        return false;
    }

    public String getNonEmpty(String ch) {
        return TextUtils.isEmpty(ch) ? "" : ch;
    }

    /**
     * 初始化控件
     * <p>
     * init view
     */
    protected abstract void initView();

    /**
     * 初始化数据 填充数据 异步请求
     * <p>
     * init data
     */
    protected abstract void initData();

    /**
     * 填充布局资源
     *
     * @return
     */
    protected abstract int layoutResId();


}
