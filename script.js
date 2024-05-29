// script.js

// Mock data representing files on an FTP server
const ftpData = [
    { name: 'file1.txt', size: '2KB' },
    { name: 'file2.jpg', size: '1MB' },
    { name: 'file3.pdf', size: '500KB' }
];

// Function to display files
function displayFiles(files) {
    const fileListDiv = document.getElementById('file-list');
    files.forEach(file => {
        const fileDiv = document.createElement('div');
        fileDiv.textContent = `${file.name} - ${file.size}`;
        fileListDiv.appendChild(fileDiv);
    });
}

// Simulate fetching data from FTP server
document.addEventListener('DOMContentLoaded', () => {
    displayFiles(ftpData);
});
