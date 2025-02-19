document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let fileInput = document.getElementById('fileUpload');
    let file = fileInput.files[0];

    if (!file) {
        document.getElementById('status').textContent = "Please select a file.";
        return;
    }

    // Mock upload process
    document.getElementById('status').textContent = "Uploading...";

    // Simulate file upload process (In reality, you'd make an API call to backend here)
    setTimeout(() => {
        document.getElementById('status').textContent = "Upload successful!";
    }, 2000);
});
