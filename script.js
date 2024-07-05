// script.js
async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('https://deskportal.netlify.app/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            displayUploadedFiles(data.files);
        } else {
            console.error('Yuklashda xatolik yuz berdi');
        }
    } catch (error) {
        console.error('Yuklashda xatolik yuz berdi:', error);
    }
}

function displayUploadedFiles(files) {
    const uploadedFilesDiv = document.getElementById('uploadedFiles');
    uploadedFilesDiv.innerHTML = '';

    files.forEach(file => {
        const link = document.createElement('a');
        link.href = `https://deskportal.netlify.app/uploads/${file}`;
        link.textContent = file;
        link.download = file;
        uploadedFilesDiv.appendChild(link);
    });
}
