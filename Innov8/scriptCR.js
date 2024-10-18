document.addEventListener('DOMContentLoaded', function() {
    const rotationForm = document.getElementById('rotation-form');
    const resultsMessage = document.getElementById('results-message');

    rotationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const soilType = document.getElementById('soil-type').value;
        const climateZone = document.getElementById('climate-zone').value;
        const crops = Array.from(document.getElementById('crops').selectedOptions).map(option => option.value);

        // Simple logic to generate a rotation plan
        const rotationPlan = generateRotationPlan(soilType, climateZone, crops);
        resultsMessage.textContent = rotationPlan;
    });

    function generateRotationPlan(soilType, climateZone, crops) {
        // Example logic for generating a rotation plan
        return `For ${soilType} soil in a ${climateZone} climate, consider rotating these crops: ${crops.join(', ')}.`;
    }
});