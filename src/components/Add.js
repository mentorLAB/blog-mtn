import React, {Component} from 'react';
import ConfirmModal from './subcomponents/ConfirmModal';

class Add extends Component {
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

    // Insert Submit function here that will use an Axios request:

    
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
                        {/* add an onClick to the post button that will invoke your submit method */}
                        <button>Post</button>
                        <button onClick={_=>this.cancel()} className='cancel-button'>Cancel</button>
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
        this.setState({
            title: '',
            subTitle: '',
            imgUrl: '',
            text: '',
            confirm: ''
        })
    }
    no(){
        this.setState({
            confirm: ''
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

export default Add;