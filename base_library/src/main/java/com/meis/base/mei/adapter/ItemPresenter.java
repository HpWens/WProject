package com.meis.base.mei.adapter;

import android.text.TextUtils;


import com.chad.library.adapter.base.viewholder.BaseViewHolder;

import java.lang.reflect.Type;
import java.util.Collection;

public abstract class ItemPresenter<T> {

    private Type mRawType;

    public ItemPresenter() {
        Type superclass = getClass().getGenericSuperclass();
        if (superclass instanceof Class) {
            throw new RuntimeException("ParameterizedType objects must be instantiated with a " +
                    "type parameter. Ex: new ParameterizedType<MyModel<MyOtherModel>>() { }");
        }
        Type type = ((java.lang.reflect.ParameterizedType) superclass).getActualTypeArguments()[0];
        mRawType = type;
    }

    public Type getRawType() {
        return mRawType;
    }

    public int getItemType() {
        return mRawType.hashCode();
    }

    public void onViewDetached(BaseViewHolder holder) {
    }

    public abstract int getLayoutRes();

    public abstract void convert(BaseViewHolder holder, T item);

    public String getNonEmpty(String ch) {
        return TextUtils.isEmpty(ch) ? "" : ch;
    }

    public boolean isEmpty(Collection coll) {
        if (coll == null || coll.isEmpty()) {
            return true;
        }
        return false;
    }
}
