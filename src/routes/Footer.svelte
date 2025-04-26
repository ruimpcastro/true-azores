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
			contactPrefix: 'https://instagram.com/',
			contact: 'johndoe'
		}
	};

	const renderContacts = () => {
		return Object.entries(contacts).map(([key, value]) => {
			return `<li>
                    <span>${value.icon}</span>
                    <a href="${value.contactPrefix + value.contact} target='_blank'">
                        <span>${value.contact}</span>
                    </a>
                </li>`;
		});
	};
</script>

<footer class="">
	<div class="footer-container">
		<h3 class="footer-text">Are you interest?</h3>
		<div>
			<h4 class="">
				If you too want to visit the azores and see some of the most beautiful and exquisit places
				use one of the following methods to reach me
			</h4>
			<div>
				<ul class="contacts">
					{@html renderContacts().join('')}
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}
	.footer-text {
		background-color: white;
	}

	h3 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1.5rem;
		text-align: left;
	}

	.contacts {
		justify-content: space-around;
	}
</style>
