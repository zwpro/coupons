function getShareObj(res) {
    return {
        title: getShareMessage(),
        path: '/pages/index/index',
        imageUrl: '/static/share.jpg',
        desc: '每日外卖红包领取',
        success(res) {
        },
        fail(res) {
        }
    }
}

function getShareMessage() {
    let messages = [{
        title: '干饭人,干饭魂,干饭人吃饭得用盆',
    },{
        title: '哪有时间想文案，天天都忙着干饭',
    },{
        title: '干饭人胃口大，一张小嘴吃天下',
    },{
        title: '生活奇奇怪怪，干饭一定要快',
    },{
        title: '别把青春差错秧，爱情哪有干饭香',
    },{
        title: '恋爱可以以后谈，饭必须趁热干',
    },{
        title: '干饭人有精神，吃饱了都进不去门',
    },{
        title: '人生苦忧参半，快乐只有干饭',
    },{
        title: '年轻人不讲武德，读书人只懂干饭',
    },{
        title: '今天干饭不狠，明天地位不稳',
    },{
        title: '要问干饭哪家强，你我皆是干饭王',
    },{
        title: '不为感情流泪，只为干饭夜不能寐',
    },{
        title: '没有难吃的食堂，只有干饭人的坚强',
    }];

    return messages[Math.floor(Math.random()*messages.length)]['title'];
}


export {
    getShareObj
}
