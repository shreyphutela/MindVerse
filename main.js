function submitTest() {
    // Add logic to process the test results
    alert('Test submitted! Results will be provided shortly.');
}

function submitConsultationRequest() {
    // Add logic to process the consultation request
    alert('Consultation request submitted! Our team will contact you shortly.');
}
function submitGad7() {
    // Get the scores from GAD-7 questions
    c const gad7Scores = Array.from(document.querySelectorAll('input[name^="gad7-q"]:checked'))
        .reduce((total, input) => total + parseInt(input.value), 0);

    // Interpret the GAD-7 results
    let gad7Result = '';
    if (gad7Scores >= 0 && gad7Scores <= 4) {
        gad7Result = 'Minimal anxiety';
    } else if (gad7Scores >= 5 && gad7Scores <= 9) {
        gad7Result = 'Mild anxiety';
    } else if (gad7Scores >= 10 && gad7Scores <= 14) {
        gad7Result = 'Moderate anxiety';
    } else if (gad7Scores >= 15 && gad7Scores <= 21) {
        gad7Result = 'Severe anxiety';
    }

    // Display the GAD-7 result
    alert(`Test submitted! Result: ${gad7Result}`);
}

function submitPhq9() {
    // Get the scores from PHQ-9 questions
const phq9Scores = Array.from(document.querySelectorAll('input[name^="phq9-q"]:checked'))
        .reduce((total, input) => total + parseInt(input.value), 0);

    // Interpret the PHQ-9 results
    let phq9Result = '';
    if (phq9Scores >= 0 && phq9Scores <= 4) {
        phq9Result = 'Minimal depression';
    } else if (phq9Scores >= 5 && phq9Scores <= 9) {
        phq9Result = 'Mild depression';
    } else if (phq9Scores >= 10 && phq9Scores <= 14) {
        phq9Result = 'Moderate depression';
    } else if (phq9Scores >= 15 && phq9Scores <= 19) {
        phq9Result = 'Moderately severe depression';
    } else if (phq9Scores >= 20 && phq9Scores <= 27) {
        phq9Result = 'Severe depression';
    }

    // Display the PHQ-9 result
    alert(`Test submitted! Result: ${phq9Result}`);
}