import React, {useState} from "react";
import s from "./UploadMovies.module.css"

const Login = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = () => {

        const formData = new FormData();
        formData.append("movies", selectedFile, setSelectedFile.name);
        let response = props.UploadMoviesThunkCreator(formData, props.token)
        response.then(function (result) {
            if (result === 1) {
                props.setIsInterfaceUpdated(!props.isInterfaceUpdated)
            }
        });
    };

    const setFile = (event) => {
        const file = event.target.files[0]
        setSelectedFile(file);
    }

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <p>Upload movies</p>
                <form>
                    <div className={s.field}>
                        <input accept=".txt" type="file" onChange={setFile}/>
                    </div>
                    <div className={s.button}>
                        <button type={"button"} onClick={submitForm}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;