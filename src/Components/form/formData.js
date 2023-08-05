export const formData = (type) => {
	const data = {
		personalInfo: [
			/* [label,type,size] */
			['name', 'text', 'col-md-6'],
			['start Date', 'date', 'col-md-6'],
			['phone', 'number', 'col-md-6'],
			['email', 'email', 'col-md-6'],
		],
		officeInfo: [
			/* [label,select_options,size] */
			['office', ['Arabic localizer'], 'col-12'],
			['department', ['business development'], 'col-md-6'],
			[
				'attendance profile',
				['present', 'absent', 'weekend', 'holiday', 'on leave'],
				'col-md-6',
			],
			['role', 'text', 'col-md-6'],
			['position', ['HR head'], 'col-md-6'],
			['direct Manager', ['Mohamed tarek'], 'col-12'],
		],
	};

	return data[type];
};
