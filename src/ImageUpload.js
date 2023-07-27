import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import './MyComponent.css';

//import { SftpClient } from 'ssh2-sftp-client';


function ImageUpload({school_id, image_id, onImageUpload}) {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  
  const [newName, setNewName] = useState('');
  const [fileName, setfileName] = useState('');
  const [type, setType]= useState('');
  const schoolId = school_id;
  const imageId=image_id;
  const handleIframeLoad = () => {
    setIsIframeVisible(true);
  };

  const handleFileChange = (event) => {
   setNewName(schoolId+'_'+imageId+'_'+Date.now());
   setfileName(schoolId+'_'+imageId+'_'+Date.now());
   //const file = new Blob([event.target.files[0]],{type: 'image/jpeg' });
    const uploadedFile = event.target.files[0];
    setType(uploadedFile.type);
    console.log(uploadedFile);
    /*myRenamedFile = new File([uploadedFile],new_name, {
      type: 'image/jpeg',
  });*/
    

    const reader = new FileReader();
    reader.onchange = (e) => {
      const { result } = e.target;
   }
    var newFile = new File([reader.readAsDataURL(uploadedFile),{type: 'image/jpeg' }],newName);
    const imageUrl = URL.createObjectURL(uploadedFile);
   // alert("URL "+imageUrl);
    setImageUrl(imageUrl);
    console.log("File Data  "+newFile+"  "+newFile.name);
    setFile(uploadedFile);
  };
  const iframe = document.createElement('iframe');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();    
    formData.append('file', file);
    const queryParams = 'fileName=' + fileName + '&type=' + encodeURIComponent(type);
    try{
    const response = await axios.post('http://localhost:8082/cap/sftp/api/v1/pushOrginalFile?'+queryParams, 
    formData).catch(error => console.error("Data Error   "+error));
    if (response.data) {
     setfileName(null);
      const imageData = {
        imageId: imageId,
        file_name: newName,
        location : response.data,
        };
      onImageUpload(imageData);
    } else {
      // Handle the case when response.data is undefined or falsy
      alert(response.data);
    }
  }catch (error) {
    // Handle errors
        alert("Problem in uploading the file");
        
  }
  }; /*Method to call api for uploading file in destination server usinfg axios*/

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    // Replace the URL with the endpoint you want to send the file to
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        // Handle response here
      })
      .catch((error) => {
        // Handle error here
      });
  }; /*Method to call api for uploading file in destination server*/

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
          <input
            type="file"
            title='test image'
            className="form-control-file"
            id="image"
            accept='.png, .jpg, .jpeg'
            onChange={handleFileChange}
          />
          
          
          <div className="my-component">
              <iframe
              title='test_image'
              onLoad={handleIframeLoad}
              style={{ display: isIframeVisible ? 'block' : 'none' }} 
              src={imageUrl} 
              allowFullScreen
              />
              <img
               className="resized-image" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!fileName}>
          Upload
        </button>
      </form>
      
    </div>
  );
}

export default ImageUpload;
