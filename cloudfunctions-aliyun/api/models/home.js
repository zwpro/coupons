const db = uniCloud.database();

var home = {
    tabs: () => {
		let tabs = db.collection('tab').get();
		return tabs
	},
	coupons: () => {
		let coupons = db.collection('coupon').orderBy("sort", "desc").get();
		return coupons
	},
}

module.exports = home;
