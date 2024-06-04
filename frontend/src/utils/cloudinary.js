


export const CloudinaryUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'cloudinaryshras');
      formData.append('cloud_name', 'dcmvnx4x7'); // Replace with your Cloudinary upload preset
  
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dcmvnx4x7/image/upload', // Replace with your Cloudinary cloud name
        {
          method: 'POST',
          body: formData,
        }
      );
  
      if (!response.ok) {
        throw new Error('Upload failed');
      }
  
      const responseData = await response.json();
      return responseData.secure_url;
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };
  
  