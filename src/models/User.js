const User = (username, user_email, tag_id) => {
	return {
		username: username,
		user_email: user_email,
		tag_id: tag_id
	};
};

module.exports = User;
