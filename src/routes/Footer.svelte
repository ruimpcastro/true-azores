<script>
	const contacts = {
		email: {
			icon: '<i class="fa-solid fa-envelope fa-xl"></i>',
			type: 'email',
			contactPrefix: 'mailto:',
			contact: 'johndoe@email.com'
		},
		phone: {
			icon: '<i class="fa-solid fa-phone fa-xl"></i>',
			type: 'phone',
			contactPrefix: 'tel:',
			contact: '+351911111111'
		},
		instagram: {
			icon: '<i class="fa-brands fa-instagram fa-xl"></i>',
			type: 'instagram',
			contactPrefix: 'https://instagram.com/',
			contact: 'johndoe'
		}
	};

	const renderContacts = () => {
		return Object.entries(contacts).map(([key, value]) => {
			return /* HTML */ `<li>
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
		<div class="footer-description">
			<h4 class="">
				If you too want to visit the azores and see some of the most beautiful and exquisit places
				use one of the following methods to reach me
			</h4>
			<div class="contacts-container">
				<ul class="contacts">
					{@html renderContacts().join('')}
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background: linear-gradient(to bottom, #24a094, #004d40);
		color: #f8f8f8;
		border-top-left-radius: 20%;
		border-top-right-radius: 20%;
		box-shadow: 0 0 10px rgba(0, 0, 100, 0.5);
	}
	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.footer-description {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		max-width: 760px;
	}

	.contacts-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.contacts {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
	}

	@media screen and (max-width: 800px) {
		.footer-description {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			max-width: 512px;
		}

		.contacts-container {
			width: auto;
			align-items: flex-end;
		}

		.contacts {
			flex-direction: row;
			gap: 1rem;
		}
	}

	@media screen and (max-width: 500px) {
		.contacts {
			flex-direction: column;
		}
	}

	h3 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1.5rem;
		text-align: left;
		margin: 0;
		width: 100%;
	}

	:global(a) {
		color: #f8f8f8;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	:global(ul) {
		padding: 0;
	}
	:global(li) {
		display: flex;
		gap: 0.5rem;
	}
</style>
