import React from 'react';

class FolderDownloader extends React.Component {
  handleDownload = () => {
    const { folderUrl } = this.props;
    const downloadLink = document.createElement('a');
    downloadLink.href = folderUrl;
    downloadLink.download = 'Poppins.zip';
    document.body.appendChild(downloadLink);
    downloadLink.click()
    document.body.removeChild(downloadLink);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDownload}>Download Folder</button>
      </div>
    );
  }
}

export default FolderDownloader;
