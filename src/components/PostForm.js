import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";



const PostForm = () => {

   const [title, setTitle] = useState('')

    const { alert } = useSelector(state => ({
        alert: state.app.alert
    }))

    const dispatch = useDispatch()

    const submitHandler = event => {
        event.preventDefault()
        if (!title.trim())
            return dispatch(showAlert('название поста не может быть пустым'))

        dispatch(createPost( {
            title, id: Date.now().toString()
        }))
        setTitle('')
    }

        return (
            <form onSubmit={submitHandler}>
                {alert && <Alert text={alert}/>}

                <div className="form-group">
                    <label htmlFor="title">Заголовок Поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        name="title"
                        onChange={({ target }) => setTitle(target.value) }
                    />
                </div>
                <button className="btn btn-success" type="submit"> Создать</button>
            </form>
        )

}

export default PostForm

// const asd = ({ dispatch, asdasd }) => {
//     const addWaf = () => {
//         dispatch(add())
//     }
//     const {} = useSelector(state => ({ asdasd: state.gfjfgjfg }))
//
//     return <div>213</div>
// }
//
// connect(state => ({ asdasd: state.gfjfgjfg }))(asd)
//
//
// const add = () => ({
//     type: 'hdjdj', hdh: fhdf, dru: 3142
// })