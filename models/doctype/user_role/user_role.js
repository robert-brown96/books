const BaseMeta = require('frappejs/model/meta');
const BaseDocument = require('frappejs/model/document');

class UserRoleMeta extends BaseMeta {
	setupMeta() {
		Object.assign(this, require('./user_role.json'));
	}
}

class UserRole extends BaseDocument {
}

module.exports = {
	Document: UserRole,
	Meta: UserRoleMeta
};