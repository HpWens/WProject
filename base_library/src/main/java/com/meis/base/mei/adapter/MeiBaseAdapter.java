package com.meis.base.mei.adapter;

import android.text.TextUtils;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.chad.library.adapter.base.BaseQuickAdapter;
import com.chad.library.adapter.base.viewholder.BaseViewHolder;

import java.util.Collection;
import java.util.List;

/**
 * author: ws4
 * created on: 2018/4/11 13:41
 * description:
 */
public abstract class MeiBaseAdapter<T> extends BaseQuickAdapter<T, BaseViewHolder> {

    /**
     * 当前页码
     * current page
     */
    private int mPageCount;

    public MeiBaseAdapter(int layoutResId, @Nullable List<T> data) {
        super(layoutResId, data);
    }

    public MeiBaseAdapter(@Nullable List<T> data) {
        super(0, data);
    }

    public MeiBaseAdapter(int layoutResId) {
        super(layoutResId);
    }

    public MeiBaseAdapter() {
        super(0);
    }

    @Override
    public void setNewData(@Nullable List<T> data) {
        super.setNewData(data);
        mPageCount = 1;
    }

    @Override
    public void addData(@NonNull Collection<? extends T> newData) {
        super.addData(newData);
        mPageCount++;
    }

    public void clearData() {
        getData().clear();
        notifyDataSetChanged();
        mPageCount = 0;
    }

    public int getPageCount() {
        return mPageCount;
    }

    public int getDataCount() {
        return getData().size();
    }

    public String getNonEmpty(String ch) {
        return TextUtils.isEmpty(ch) ? "" : ch;
    }
}
