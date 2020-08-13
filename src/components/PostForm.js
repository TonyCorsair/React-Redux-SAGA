import React from "react";
import {connect} from "react-redux";
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title : ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state
        if(!title.trim()) {
            return this.props.showAlert('название поста не может быть пустым')
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)
        this.setState({title: ''})
    }



    changeInputHandler = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert}/>}

                <div className="form-group">
                    <label htmlFor="title">Заголовок Поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange = {this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit"> Создать </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
alert:state.app.alert
})

const mapDispatchToProps = {
    createPost, showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)

// dispatch - финал2 добавляем нужные экшены через mapDispatchToProps и они станут доступны в props