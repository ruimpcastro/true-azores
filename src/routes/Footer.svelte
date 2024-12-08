<script>
	const contacts = {
		email: {
			icon: '📧',
			type: 'email',
			contactPrefix: 'mailto:',
			contact: 'johndoe@email.com'
		},
		phone: {
			icon: '📞',
			type: 'phone',
			contactPrefix: 'tel:',
			contact: '+351911111111'
		},
		instagram: {
			icon: '📸',
			type: 'instagram',
			contact: '@johndoe'
		}
	};

	const renderContacts = () => {
		return Object.entries(contacts).map(([key, value]) => {
			return `<li>
                    <span>${value.icon}</span>
                    <a href="${value.contactPrefix + value.contact}">
                        <span>${value.contact}</span>
                    </a>
                </li>`;
		});
	};
</script>

<footer class="">
	<h3 class="">Let's stay in touch!</h3>
	<div>
		<h4 class="">Feel free to reach out to me through any of the following methods:</h4>
		<div>
			<ul class="contacts">
				{@html renderContacts().join('')}
			</ul>
		</div>
	</div>
</footer>
