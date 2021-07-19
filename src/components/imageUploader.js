import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import { useState } from "react";

const ImageUploader = (props) => {
    const imageName= props.imageName
    const [file,setFile] = useState(null);

    const uploadSingleFile =(e) =>{
        setFile(URL.createObjectURL(e.target.files[0]))
        
    }
    //related to upload check later
    // const upload =(e) =>{
    //     e.preventDefault()
    //     console.log(file)
    // }

    let imgPreview;
    if (file) {
            imgPreview = <img src={file} alt='' style={{maxHeight:"300px", maxWidth:"300px"}} />;
    }
    return( 

        <div className="container">

        <Row>
            <Form.Group>
            <Form.File 
            id="definesome"  
            onChange={uploadSingleFile} 
            label={imageName}
            className="image-upload-field" 
            data-browse="Upload"
            custom/>
            </Form.Group>
        </Row>
        <Row>
        <div className="" style={{ paddingBottom:'40px'}}>
        {imgPreview}

        </div>

        </Row>

      
            
        </div>
         
           
         );
}
 
export default ImageUploader;