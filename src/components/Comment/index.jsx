import React, {useState} from 'react';
import CommentLayout from '../UI/CommentLayout';

const Comment = () => {
    let text = '';

    const [texts, setText] = useState(['']);
    let inputValue;

    const textHundler = (event) => {
        inputValue = event.target.value;
        
    }

    const btnHundler = () => {
        if(!inputValue) alert('напиши что то')
        setText([...texts,inputValue])
    }

    return (
        <CommentLayout className='main'>
            <div className='comments'>
                <h1>Comments</h1>
                {texts.map((el) => (<p>{el}</p>))}
            </div>
            <div>
                <input onChange={textHundler} type='text'/>
                {/* <input onSubmit={() =>{alert('hello')}} type='submit' value='add comment'/> */}
                <button onClick={btnHundler}>add comment</button>
            </div>
        </CommentLayout>
    )
}
export default Comment;
