
import React, { useState, useEffect } from 'react';
import { useUserAuth } from '../../contexts/UserAuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import { storage } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Medical () {
  const { user, state:{url} } = useUserAuth();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref (storage, "images/")
  const uploadImage =() => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name +v4 ()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) =>{
        setImageList ((prev) => [...prev, url])
      alert ("Image Uploaded");
      })
      
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) =>{
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return(
<>
{user.emailVerified ?(
<div className="App">
  <input type="file"onChange={(event) => {
   setImageUpload(event.target.files[0])}}/>
  <button onClick ={uploadImage}> Upload image</button><br/><br/>
 {imageList.map((url) =>{
   return <img src={url}  class="img-fluid" width="250" height="300" ></img>
 })}
</div>

):(
  <div className='right'>
  <h2 style={{ display: "block",margin:50 }}>You Need to Verify your Email to see the Appointments</h2>

</div>
)
}


</>
           
    );
}

export default Medical;





