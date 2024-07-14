document.getElementById('operatorButton').addEventListener('click', () => {
    const fruitDropdown = document.getElementById('fruitDropdown');
    const copyButton = document.getElementById('copyButton');
    
    // Hide the ticket questions if they are visible
    document.getElementById('ticketQuestions').style.display = 'none';
    
    // Toggle the display of the fruit dropdown and copy button
    if (fruitDropdown.style.display === 'none') {
        fruitDropdown.style.display = 'block';
        copyButton.style.display = 'block';
    } else {
        fruitDropdown.style.display = 'none';
        copyButton.style.display = 'none';
    }
});

document.getElementById('ticketsButton').addEventListener('click', () => {
    const ticketQuestions = document.getElementById('ticketQuestions');
    const copyButton = document.getElementById('copyButton');
    
    // Hide the fruit dropdown if it is visible
    document.getElementById('fruitDropdown').style.display = 'none';
    
    // Toggle the display of the ticket questions and copy button
    if (ticketQuestions.style.display === 'none') {
        ticketQuestions.style.display = 'block';
        copyButton.style.display = 'block';
    } else {
        ticketQuestions.style.display = 'none';
        copyButton.style.display = 'none';
    }
});

document.getElementById('ticketDropdown').addEventListener('change', () => {
    const selectedTicket = document.getElementById('ticketDropdown').value;
    const ticketDetails = document.getElementById('ticketDetails');
    const repetitiveOption = document.getElementById('repetitiveOption');
    const operatorResponseOption = document.getElementById('operatorResponseOption');

    // Reset visibility of options
    repetitiveOption.style.display = 'block';
    operatorResponseOption.style.display = 'block';

    // Check if selected ticket requires hiding options
    if (selectedTicket === "False Cliff Detection" || selectedTicket === "Squeegee Detatch (Rear Manual Moves)" || selectedTicket === "Squeegee Detatch (Stuck By Obstacles)") {
        repetitiveOption.style.display = 'none'; // Hide Is This Issue Repetitive?
        operatorResponseOption.style.display = 'none'; // Hide Did Operator Respond?
    }
});

document.getElementById('copyButton').addEventListener('click', () => {
    const fruitDropdown = document.getElementById('fruitDropdown');
    const ticketQuestions = document.getElementById('ticketQuestions');
    const issueRepetitiveYes = document.getElementById('issueRepetitiveYes');
    const issueRepetitiveNo = document.getElementById('issueRepetitiveNo');
    const issueRepetitiveNoNeed = document.getElementById('issueRepetitiveNoNeed');
    const operatorRespondYes = document.getElementById('operatorRespondYes');
    const operatorRespondNo = document.getElementById('operatorRespondNo');
    const operatorRespondNoNeed = document.getElementById('operatorRespondNeed');
    let textToCopy = '';

    if (fruitDropdown.style.display !== 'none') {
        const selectedOption = fruitDropdown.value;
        textToCopy = `/ RA called for ${selectedOption} and ended in no response`;
    } else if (ticketQuestions.style.display !== 'none') {
        const selectedTicket = document.getElementById('ticketDropdown').value;
        const sectorInput = document.getElementById('sectorInput').value;
        let repetitiveResponse = '';
        let operatorResponse = '';

        if (issueRepetitiveYes.checked) {
            repetitiveResponse = "RA try to reset it but its repetitive";
        } else if(issueRepetitiveNo.checked){
            repetitiveResponse = "RA reset it neo continued cleaning";
        }else{
            repetitiveResponse=""
        }

        if (operatorRespondYes.checked) {
            operatorResponse = "RA called operator and they will assist";
        } else if(operatorRespondNo.checked) {
            operatorResponse = "RA called operator and ended in no response";
        }else{
            operatorResponse=""
        }

        if (selectedTicket === "False Cliff Detection") {
            repetitiveOption.style.display = 'none'; // Hide Is This Issue Repetitive
            operatorResponseOption.style.display = 'none'; // Hide Did Operator Respond?
            textToCopy = `
                While Neo was cleaning sector ${sectorInput || 'starting plan'} presenting False cliff detection 
                RA tried giving manual moves but its still their and neo can't able to plan path 
                RA cancel the CP
                3D-Diagnostics:-
                `;
        }else if(selectedTicket === "Squeegee Detatch (Rear Manual Moves)"){
            repetitiveOption.style.display = 'none'; // Hide Is This Issue Repetitive

            textToCopy=`While neo was in feedback , RA took the control and RA noticed their is Tight space, and Ra tried a rear manual move and neo started presented the following
            ${selectedTicket}`
        }
        else if(selectedTicket === "Squeegee Detatch (Stuck By Obstacles)"){
            repetitiveOption.style.display = 'none'; // Hide Is This Issue Repetitive
            
            textToCopy=`While neo was in feedback , RA took the control and RA noticed their is Tight space, and Ra tried giving manual move and neo started presented the following
            ${selectedTicket}`
        }else{
        textToCopy = `
            While Neo was cleaning sector ${sectorInput || 'starting plan'} presented the following:

            ${selectedTicket}

            ${repetitiveResponse}.
            ${operatorResponse}.
            Diagnostics:-
        `;}
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        // alert(`Text copied to clipboard:\n\n${textToCopy}`);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
