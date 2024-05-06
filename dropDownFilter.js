/**
 * Author: @SimarCakmak
 * GitHub: @madmediaz2
 *
 * This file enhances dropdown lists by converting them into searchable fields.
 * Check ./entryform.php for an example on how to use this class.
 * This class dynamically generates an input field above the dropdown, minimizing HTML modifications.
 * It ensures the form can still operate without JavaScript.
 */

document.addEventListener('DOMContentLoaded', () => {
    const dropdownIds = ['supplier', 'category', 'CPU', 'country', 'warehouse_country', 'customers'];
    dropdownIds.forEach(id => new FilterableDropdown(id));
});

class FilterableDropdown {
    constructor(dropDownId) {
        this.dropDownList = document.getElementById(dropDownId);

        if (!this.dropDownList) {
            console.error(`Dropdown with ID '${dropDownId}' does not exist.`);
            return;
        }

        this.inputField = document.createElement('input');
        this.inputField.type = 'text';
        this.inputField.className = 'form-control';
        this.inputField.placeholder = 'Search...';
        this.inputField.id = `${dropDownId}--search`;

        this.resultsContainer = document.createElement('div');
        this.resultsContainer.className = 'dropdown-results';
        this.resultsContainer.style.position = 'relative';
        this.resultsContainer.style.width = '100%';
        this.resultsContainer.style.backgroundColor = 'white';
        this.resultsContainer.style.border = '1px solid #ccc';
        this.resultsContainer.style.display = 'none';
        this.resultsContainer.style.zIndex = '10000';  // Extremely high z-index
        this.resultsContainer.style.maxHeight = '200px';
        this.resultsContainer.style.overflowY = 'auto';

        this.dropDownList.parentNode.insertBefore(this.inputField, this.dropDownList);
        this.dropDownList.parentNode.insertBefore(this.resultsContainer, this.dropDownList.nextSibling);  // Ensure it's positioned correctly in the DOM

        this.dropDownList.style.display = 'none';

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.inputField.addEventListener('input', () => this.filterOptions());
        this.inputField.addEventListener('focus', () => this.filterOptions());
        this.inputField.addEventListener('blur', () => {
            setTimeout(() => this.hideResults(), 150);
        });
        this.resultsContainer.addEventListener('click', event => {
            if (event.target.dataset.value) {
                this.selectOption(event.target.dataset.value, event.target.innerText);
            }
        });
    }

    showResults() {
        this.resultsContainer.style.display = 'block';
    }

    hideResults() {
        this.resultsContainer.style.display = 'none';
    }

    filterOptions() {
        const searchInput = this.inputField.value.toLowerCase();
        this.resultsContainer.innerHTML = '';

        Array.from(this.dropDownList.options).forEach(option => {
            if (option.text.toLowerCase().includes(searchInput)) {
                const resultItem = document.createElement('div');
                resultItem.innerText = option.text;
                resultItem.dataset.value = option.value;
                resultItem.style.padding = '5px';
                resultItem.style.cursor = 'pointer';
                this.resultsContainer.appendChild(resultItem);
            }
        });

        this.showResults();
    }

    selectOption(value, text) {
        this.inputField.value = text;
        this.dropDownList.value = value;
        this.hideResults();
    }
}
