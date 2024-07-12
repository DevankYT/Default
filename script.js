const downloadButton = document.getElementById('download-ebook');

downloadButton.addEventListener('click', () => {
  const ebookUrl = 'ebook.pdf'; // replace with your eBook file URL
  const fileName = 'ebook.pdf'; // replace with your eBook file name

  const a = document.createElement('a');
  a.href = ebookUrl;
  a.download = fileName;
  a.click();
});