
// 加载层
function loading(text, config) {
    if (text === false) {
        uni.hideLoading();
    } else {
        text = text || '';
        let options = Object.assign({
            title: text,
            mask: true,
        }, config || {});
        uni.showLoading(options);
    }
}

// 弹窗
function toast(text, config) {
    // 防止由于loading的关闭导致toast关闭
    loading(false)
    let options = Object.assign({
        title: text,
        icon: 'none',
        duration: 2000,
    }, config || {});
    uni.showToast(options);
}

// 跳转到登录
function toLogin() {
    uni.reLaunch({
        url: '../login/login'
    });
}

function toHome() {
    uni.switchTab({
        url: '../home/home'
    });
}

function toBack(pagesLength) {
    // #ifdef H5
    if (pagesLength > 1) {
        uni.navigateBack(1)
        return;
    } else {
        uni.switchTab({
            url: '../home/home'
        });
        return;
    }
    // #endif
    uni.navigateBack(1)
}

export { loading, toast, toLogin, toBack, toHome }