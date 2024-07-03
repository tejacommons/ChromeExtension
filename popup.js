document.getElementById('operatorButton').addEventListener('click', () => {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.display = 'block'; // Show each option
    });

    document.getElementById('copyButton').style.display = 'block'; // Show the copy button
});

document.querySelectorAll('input[name="fruit"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedFruit = document.querySelector('input[name="fruit"]:checked');
        if (selectedFruit) {
            navigator.clipboard.writeText(` / RA called for ${selectedFruit.value} and ended in no response`)
            // .then(() => {
            //     alert(`Copied: Ramu is eating ${selectedFruit.value}`);
            // }).catch(err => {
            //     console.error('Failed to copy text: ', err);
            // });
        }
    });
});
