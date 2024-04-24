/**
 * 
 * Author: @SimarCakmak
 * gh: @madmediaz2
 * 
 *  This file's use is so that we can get a dropdownlist and make it a typable field where you can select 
 *  options based on your search. 
 *  If u want to use this class to filter through your list be sure to check ./entryform.php for an example how to use it.
 *  all the way at the bottom there is a eventlistener to append new lists to create a class object.
 * 
 *  this class dynamically generates a input field above the dropdownbox so minimal changes to HTML are needed. 
 *  This will also Enable the form to still run without javascript.
 *
 *  You need to set attribute Size otherwise it will not work.
 * 
 */

document.addEventListener('DOMContentLoaded', () => {
    // Applying the FilterList to each relevant dropdown
    const dropdownIds = [];
    dropdownIds.forEach(id => {
        new FilterList(id);
    });
});


class FilterList {
    constructor(dropDownId) {
        this.dropDownId = dropDownId;
        this.dropDownList = document.getElementById(dropDownId);

        // Check if dropdown exists
        if (!this.dropDownList) {
            console.error('Dropdown with ID ' + dropDownId + ' does not exist.');
            return;
        }

        // Create an input field dynamically
        this.inputField = document.createElement('input');
        this.inputField.type = 'text';
        this.inputField.className = 'form-control';
        this.inputField.placeholder = 'Search...';
        this.inputField.id = dropDownId + '--search';

        // Insert the input field right before the dropdown
        this.dropDownList.parentNode.insertBefore(this.inputField, this.dropDownList);

        // Style adjustments
        this.dropDownList.style.position = 'relative';
        this.dropDownList.style.width = '100%';
        this.dropDownList.style.display = 'none';  // Initially hide the dropdown
        

        // Event listeners
        this.inputField.addEventListener('input', () => this.filterOptions());
        this.inputField.addEventListener('focus', () => this.showDropDown());
        this.inputField.addEventListener('blur', () => setTimeout(() => this.hideDropDown(), 150));
        this.dropDownList.addEventListener('change', () => this.selectOption());
    }

    showDropDown() {
        if (this.inputField.value.length > 0) {
            this.dropDownList.style.display = 'block';
        }
    }

    hideDropDown() {
        this.dropDownList.style.display = 'none';
    }

    filterOptions() {
        const searchInput = this.inputField.value.toLowerCase();
        let found = false;

        Array.from(this.dropDownList.options).forEach(option => {
            if (option.text.toLowerCase().includes(searchInput)) {
                option.style.display = 'block';
                found = true;
            } else {
                option.style.display = 'none';
            }
        });

        this.dropDownList.style.display = found ? 'block' : 'none';
    }

    selectOption() {
        if (this.dropDownList.selectedIndex > -1) {
            this.inputField.value = this.dropDownList.options[this.dropDownList.selectedIndex].text;
            this.hideDropDown();
        }
    }
}

