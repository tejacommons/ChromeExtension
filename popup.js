document.getElementById('operatorButton').addEventListener('click', () => {
    const dropdown = document.getElementById('fruitDropdown');
    const copyButton = document.getElementById('copyButton');
    
    // Toggle the display of the dropdown and copy button
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
        copyButton.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
        copyButton.style.display = 'none';
    }
});

document.getElementById('copyButton').addEventListener('click', () => {
    const selectedOption = document.getElementById('fruitDropdown').value;
    const textToCopy = `/RA called for ${selectedOption} and ended in no response`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert(`Text copied to clipboard: ${textToCopy}`);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
