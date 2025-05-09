const hasTooltip = document.querySelectorAll('.has-tooltip');

let tooltipElement = document.createElement('div');
tooltipElement.classList.add('tooltip');
document.body.appendChild(tooltipElement);


hasTooltip.forEach(tooltip => {
	tooltip.addEventListener('click', event => {
		event.preventDefault();

		const tooltipText = tooltip.getAttribute('title');
		tooltipElement.textContent = tooltipText;

		const rect = tooltip.getBoundingClientRect();
		tooltipElement.style.left = `${rect.left}px`;
		tooltipElement.style.top = `${rect.bottom}px`;

		if (tooltipElement.classList.contains('tooltip_active')) {
			tooltipElement.classList.remove('tooltip_active');
		} else {
			tooltipElement.classList.add('tooltip_active');
		}

	})

})
document.addEventListener('click', (event) => {
	if (!event.target.classList.contains('has-tooltip')) {
		tooltipElement.classList.remove('tooltip_active');
	}
});