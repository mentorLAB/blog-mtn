import React, {Component} from 'react';
import ConfirmModal from './subcomponents/ConfirmModal';



class Edit extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            subTitle:'',
            imgUrl:'',
            text:'',
            confirm: ''
        }
        this.yes = this.yes.bind(this);
        this.no = this.no.bind(this);
    }
    // Insert a componentDidMount method that does an axios request for the blog indicated by the param in the url
    

    // Insert Submit function here that will use an Axios request:


    // Insert into the deleteBlog method an axios delete request 
    deleteBlog(){
        
    }
    
    render() {
        let {title, subTitle, imgUrl, text} = this.state;
        return (
            <div className='content'>
                <div className="add-blog">
                    <div className="input-group">
                        <label htmlFor="">Title</label>
                        <input value={title} onChange={e=>this.titleChange(e.target.value)} type="text"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Sub-Title</label>
                        <input value={subTitle} onChange={e=>this.subTitleChange(e.target.value)} type="text"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Photo Url</label>
                        <input value={imgUrl} onChange={e=>this.imgUrlChange(e.target.value)} type="text"/>
                    </div>
                    <div className="input-group text-input">
                        <label htmlFor="">Content</label>
                        <textarea value={text} onChange={e=>this.textChange(e.target.value)} placeholder="Blog here!" />
                    </div>
                    <div className="buttons">
                        <button onClick={_=>this.delete()} className='delete-button' >Delete</button>
                        <button onClick={_=>this.cancel()} className='cancel-button'>Cancel</button>
                        <button onClick={_=>this.update()} >Update</button>
                    </div>
                    {
                        this.state.confirm
                        ?
                        <ConfirmModal confirm={this.state.confirm} no={this.no} yes={this.yes} />
                        :
                        null
                    }
                </div>
            </div>
        )
    }

    yes(){
        if (this.state.confirm === 'discard'){
            this.setState({
                title: '',
                subTitle: '',
                imgUrl: '',
                text: '',
                confirm: ''
            })
        }
        else{
            this.deleteBlog()
        }
    }
    no(){
        this.setState({
            confirm: ''
        })
    }
    delete(){
        this.setState({
            confirm: 'delete'
        })
    }
    cancel(){
        this.setState({
            confirm: 'discard'
        })
    }

    titleChange(val){
        this.setState({
            title: val
        })
    }
    subTitleChange(val){
        this.setState({
            subTitle: val
        })
    }
    imgUrlChange(val){
        this.setState({
            imgUrl: val
        })
    }
    textChange(val){
        this.setState({
            text: val
        })
    }
}

export default Edit;